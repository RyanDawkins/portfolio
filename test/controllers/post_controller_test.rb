require 'test_helper'

class PostControllerTest < ActionController::TestCase
  test "should post create" do
    post :create, :id => 1, :format => :json
    assert_response :success
  end

  test "should post update" do
    post :update, :id => 1, :format => :json
    assert_response :success
  end

  test "should get destroy" do
    get :destroy, :id => 1, :format => :json
    assert_response :success
  end

  test "should get show" do
    get :show, :id => 1, :format => :json
    assert_response :success
  end

end
