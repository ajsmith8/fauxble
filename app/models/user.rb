class User < ActiveRecord::Base
  attr_accessible :name, :provider, :uid, :password, :token, :signed_in, :signed_in_fb
  
  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.signed_in_fb = true
    end
  end
end
