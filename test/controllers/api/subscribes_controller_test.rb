require 'test_helper'

class Api::SubscribesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_subscribes_index_url
    assert_response :success
  end

end
