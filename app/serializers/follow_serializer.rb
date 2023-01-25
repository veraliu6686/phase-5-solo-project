class FollowSerializer < ActiveModel::Serializer
    attributes :id, :follower_id,:followed_id
    has_one :follower, class_name: "User"
    has_one :followed, class_name: "User"
end
