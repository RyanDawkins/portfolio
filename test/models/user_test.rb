require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "cannot save blank" do
    user = User.new
    assert_not user.save
  end

  test "cannot save without username" do
    user = get_without :username
    assert_not user.save
  end

  test "cannot save without first_name" do
    user = get_without :first_name
    assert_not user.save
  end

  test "cannot save without last_name" do
    user = get_without :last_name
    assert_not user.save
  end

  test "cannot save without email" do
    user = get_without :email
    assert_not user.save
  end

  test "cannot save email with space" do
    user = get_without :email
    user.email = "bobby jones"
    assert_not user.save
  end

  test "cannot save email without @ sign" do
    user = get_without :email
    user.email = "john.doe.com"
    assert_not user.save
  end

  test "cannot save blank role" do
    user = get_without :role
    assert_not user.save
  end

  test "cannot save string as role" do
    user = get_without :role
    user.role = "bobby jones"
    assert_not user.save
  end

  test "cannot save role less than 1" do
    user = get_without :role
    user.role = 0
    assert_not user.save
  end

  test "cannot save role as a decimal" do
    user = get_without :role
    user.role = 1.2
    assert_not user.save
  end

  private
  def get_without attr

    user = User.new

    if not attr == :username
      user.username = "john.doe"
    end
    if not attr == :first_name
      user.first_name = "John"
    end
    if not attr == :last_name
      user.last_name = "Doe"
    end
    if not attr == :email
      user.email = "john.doe@example.com"
    end
    if not attr == :role
      user.role = 1
    end

    return user
  end

end
