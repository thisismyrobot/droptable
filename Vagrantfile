Vagrant.configure("2") do |config|
  config.vm.box = "precise32"
  config.vm.network :forwarded_port, host: 8000, guest: 8000
  config.vm.synced_folder "src/", "/home/vagrant/droptable"
end