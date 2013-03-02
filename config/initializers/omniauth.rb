Rails.application.config.middleware.use OmniAuth::Builder do
  #provider :facebook, '282324831851627', 'ce4aaeb4e63d13ed2e6adea6eb354181'  #localhost
  #provider :facebook, '336449143129017', 'ee6de69f67830a4d75002642f1e8458c'  #salty-lowlands-9089
  provider :facebook, '430430590318322', '5856d98c593b31655690a08889d46305' #fusegap
end