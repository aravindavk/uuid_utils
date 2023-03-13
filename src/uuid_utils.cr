require "digest/sha1"
require "digest/md5"
require "uuid"

# Refer: https://www.ietf.org/rfc/rfc4122.txt

struct UUID
  # Default namespaces
  enum Namespace
    # NameSpace_DNS
    DNS

    # NameSpace_URL
    URL

    # NameSpace_OID
    OID

    # NameSpace_X500
    X500
  end

  private def self.namespace(value : Namespace | UUID)
    case value
    in Namespace::DNS  then UUID.new "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
    in Namespace::URL  then UUID.new "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
    in Namespace::OID  then UUID.new "6ba7b812-9dad-11d1-80b4-00c04fd430c8"
    in Namespace::X500 then UUID.new "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
    in UUID            then value
    end
  end

  # Generate a UUID from the MD5 hash of a namespace UUID and a name.
  #
  # Example:
  # ```
  # require "uuid_utils"
  #
  # namespace = UUID.new("68ab717d-d847-4277-be1a-303be8ac3d97")
  # msg = "Hello World!"
  # puts UUID.uuid3(namespace, msg) # => 33056d85-5061-31c8-9656-df07f3eec397
  # ```
  def self.uuid3(ns : UUID | Namespace, value)
    ns = namespace(ns)
    hash = Digest::MD5.digest do |ctx|
      ctx.update ns.bytes
      ctx.update value
    end
    UUID.new(
      hash[0...16],
      version: UUID::Version::V3,
      variant: UUID::Variant::RFC4122
    )
  end

  # Generate a random UUID.
  #
  # Example:
  # ```
  # require "uuid_utils"
  #
  # puts UUID.uuid4 # => 39e54402-44c6-42c6-be52-4bb9ab18a5fa
  # ```
  def self.uuid4
    UUID.random
  end

  # Generate a UUID from the SHA-1 hash of a namespace UUID and a name.
  #
  # Example:
  # ```
  # require "uuid_utils"
  #
  # namespace = UUID.new("68ab717d-d847-4277-be1a-303be8ac3d97")
  # msg = "Hello World!"
  # puts UUID.uuid5(namespace, msg) # => 562ed049-5b55-582d-ba51-812a786927ca
  # ```
  def self.uuid5(ns : UUID | Namespace, value)
    ns = namespace(ns)
    hash = Digest::SHA1.digest do |ctx|
      ctx.update ns.bytes
      ctx.update value
    end
    UUID.new(
      hash[0...16],
      version: UUID::Version::V5,
      variant: UUID::Variant::RFC4122
    )
  end
end
