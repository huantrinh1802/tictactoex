defmodule TicTacToex.AccountsGuestTest do
  use TicTacToex.DataCase

  import TicTacToex.AccountsFixtures

  alias TicTacToex.Accounts

  defp guest_attrs, do: %{name: unique_user_name(), email: unique_user_email()}

  describe "create_guest_user/1" do
    test "creates a guest with a generated password" do
      assert {:ok, user} = Accounts.create_guest_user(guest_attrs())
      assert user.guest
      assert is_binary(user.hashed_password)
      assert is_nil(user.password)
    end

    test "uses the given password" do
      attrs = Map.put(guest_attrs(), :password, "a guest password")
      assert {:ok, user} = Accounts.create_guest_user(attrs)
      assert %{id: id} = Accounts.get_user_by_email_and_password(user.email, "a guest password")
      assert id == user.id
    end

    test "validates like a normal registration" do
      assert {:error, changeset} = Accounts.create_guest_user(%{email: "not valid"})
      assert %{email: [_ | _], name: ["can't be blank"]} = errors_on(changeset)
    end
  end

  describe "convert_guest_user/2" do
    setup do
      {:ok, guest} = Accounts.create_guest_user(guest_attrs())
      %{guest: guest}
    end

    test "turns the guest into a full user with new credentials", %{guest: guest} do
      attrs = valid_user_attributes()
      assert {:ok, user} = Accounts.convert_guest_user(guest, attrs)

      assert user.id == guest.id
      refute user.guest
      assert user.email == attrs.email
      assert user.name == attrs.name
      assert Accounts.get_user_by_email_and_password(attrs.email, attrs.password)
    end

    test "keeps the guest's own name and email valid (no uniqueness clash with itself)", %{
      guest: guest
    } do
      attrs = %{email: guest.email, name: guest.name, password: valid_user_password()}
      assert {:ok, user} = Accounts.convert_guest_user(guest, attrs)
      refute user.guest
    end

    test "leaves the guest untouched when the data is invalid", %{guest: guest} do
      assert {:error, changeset} =
               Accounts.convert_guest_user(guest, %{email: "x@y.z", name: "N", password: "short"})

      assert %{password: ["should be at least 12 character(s)"]} = errors_on(changeset)
      assert Accounts.get_user!(guest.id).guest
    end
  end
end
