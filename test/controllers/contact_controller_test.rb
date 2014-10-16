require 'test_helper'

class ContactControllerTest < ActionController::TestCase
  test "should get index" do
    post :create
    assert_response :success
  end

end
