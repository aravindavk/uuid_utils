require "spec"
require "../src/uuid_utils"

NAMESPACE = UUID.new("68ab717d-d847-4277-be1a-303be8ac3d97")
MSG       = "Hello World!"

# uuidgen -n 68ab717d-d847-4277-be1a-303be8ac3d97 -N "Hello World!" --md5
UUID_V3_OUTPUT = "33056d85-5061-31c8-9656-df07f3eec397"

# uuidgen -n 68ab717d-d847-4277-be1a-303be8ac3d97 -N "Hello World!" --sha1
UUID_V5_OUTPUT = "562ed049-5b55-582d-ba51-812a786927ca"

describe UUID do
  describe "#uuid3" do
    it "returns a string" do
      typeof(UUID.uuid3(NAMESPACE, MSG)).should eq UUID
    end

    it "returns 36 characters" do
      UUID.uuid3(NAMESPACE, MSG).to_s.size.should eq 36
    end

    it "returns known UUID" do
      UUID.uuid3(NAMESPACE, MSG).to_s.should eq UUID_V3_OUTPUT
    end
  end

  describe "#uuid4" do
    it "returns a string" do
      typeof(UUID.uuid4).should eq UUID
    end

    it "returns 36 characters" do
      UUID.uuid4.to_s.size.should eq 36
    end
  end

  describe "#uuid5" do
    it "returns a string" do
      typeof(UUID.uuid5(NAMESPACE, MSG)).should eq UUID
    end

    it "returns 36 characters" do
      UUID.uuid5(NAMESPACE, MSG).to_s.size.should eq 36
    end

    it "returns known UUID" do
      UUID.uuid5(NAMESPACE, MSG).to_s.should eq UUID_V5_OUTPUT
    end
  end
end
