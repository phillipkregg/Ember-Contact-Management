# == Schema Information
#
# Table name: contacts
#
#  id         :integer         not null, primary key
#  first_name :string(255)
#  last_name  :string(255)
#  address    :string(255)
#  city       :string(255)
#  state      :string(255)
#  phone_num  :string(255)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

class Contact < ActiveRecord::Base
  attr_accessible :address, :city, :first_name, :last_name, :phone_num, :state
end
