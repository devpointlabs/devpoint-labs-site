require 'test_helper'

class Api::ContactsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_contacts_index_url
    assert_response :success
  end

  test "should get show" do
    get api_contacts_show_url
    assert_response :success
  end

  test "should get update" do
    get api_contacts_update_url
    assert_response :success
  end

  test "should get create" do
    get api_contacts_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_contacts_destroy_url
    assert_response :success
  end

end
