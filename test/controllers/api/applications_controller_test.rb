require 'test_helper'

class Api::ApplicationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_applications_index_url
    assert_response :success
  end

  test "should get create" do
    get api_applications_create_url
    assert_response :success
  end

  test "should get update" do
    get api_applications_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_applications_destroy_url
    assert_response :success
  end

end
