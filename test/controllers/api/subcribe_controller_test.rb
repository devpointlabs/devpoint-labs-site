require 'test_helper'

class Api::SubcribeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_subcribe_index_url
    assert_response :success
  end

end
