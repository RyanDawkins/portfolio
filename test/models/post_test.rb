require 'test_helper'

class PostTest < ActiveSupport::TestCase

    test "empty_post" do
        post = Post.new
        assert_not post.save
    end

    test "fails with no title" do
        post = get_post_without_attr :title
        assert_not post.save
    end

    test "fails with no content" do
        post = get_post_without_attr :content
        assert_not post.save
    end

    def get_post_without_attr attr

        post = Post.new

        unless attr == :title
            post.title = "Test"
        end

        unless attr == :content
            post.content = "Some awesome post"
        end

        return post

    end

end
