require 'test_helper'

class ContactControllerTest < ActionController::TestCase
  test "should get index" do
    get :new
    assert_response :success
  end

end
