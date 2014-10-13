require 'test_helper'

class PersonTest < ActiveSupport::TestCase

  test "blank person" do
    person = Person.new
    assert_not person.save
  end

  test "has_first_name" do
      person = get_person_without_attr :first_name
      assert_not person.save
  end

  test "has_email" do
      person = get_person_without_attr :email
      assert_not person.save
  end

  test "has_email_correctness" do
    person = get_person_without_attr :email
    person.email = "john.doe"

    assert_not person.save
  end

  def get_person_without_attr attr

      person = Person.new

      unless attr == :first_name
          person.first_name = "John"
      end

      unless attr == :last_name
          person.last_name = "Doe"
      end

      unless attr == :email
          person.email = "john.doe@gmail.com"
      end

      return person

  end

end
