class User < ActiveRecord::Base
  attr_accessor :password, :token
  attr_accessible :name, :provider, :uid, :signed_in, :signed_in_fb, :tutorials,
                  :password, :confirmation, :encrypted_email, :token
                  
  before_save :check_encrypt
  
  require 'openssl'
  require 'base64'
  
  def self.create_with_omniauth(auth)
    joanie = create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.signed_in_fb = true
    end
    
    Challenge.set_default_challenges(joanie)
    
    return joanie # hoooray!
  end
  
  def has_password?(submitted_password)
    encrypted_password == encrypt(submitted_password)
  end
  
  def check_encrypt
    if password
      encrypt_password
    end
  end
  
  def authenticate_password(string)
    if secure_hash("#{string}--#{self.password_salt}") == self.encrypted_password
      return true
    else
      return false
    end
  end
  
  private
    
    def encrypt_password
      self.password_salt = make_salt unless has_password?(password)
      self.encrypted_password = encrypt(password)
    end

    def encrypt(string)
      secure_hash("#{password_salt}--#{string}")
    end

    def make_salt
      secure_hash("#{Time.now.utc}--#{password}")
    end

    def secure_hash(string)
      Digest::SHA2.hexdigest(string)
    end
end
