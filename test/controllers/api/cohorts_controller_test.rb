require 'test_helper'

class Api::CohortsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cohorts_index_url
    assert_response :success
  end

  test "should get show" do
    get api_cohorts_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_cohorts_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_cohorts_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_cohorts_delete_url
    assert_response :success
  end

end
