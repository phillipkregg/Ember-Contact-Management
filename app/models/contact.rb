class Contact < ActiveRecord::Base
  attr_accessible :address, :city, :first_name, :last_name, :phone_num, :state
end
