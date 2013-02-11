class UserMetric < ActiveRecord::Base
  attr_accessible :user_name, :user_id, :challenges_started, :challenges_finished, :challenges_created, :complete_replies,
                  :challenges_recieved, :num_users_challenged, :num_challenged_users, :time_on_site
end
