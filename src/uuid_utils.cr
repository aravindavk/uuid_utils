require "digest/sha1"
require "digest/md5"
require "uuid"

class NotImplemented < Exception
end

struct UUID
  def self.uuid1
    raise NotImplemented.new "UUID v1 not implemented"
  end

  def self.uuid2
    raise NotImplemented.new "UUID v2 not implemented"
  end

  def self.uuid3(namespace : UUID, value)
    hash = Digest::MD5.digest do |ctx|
      ctx.update namespace.bytes
      ctx.update value
    end
    UUID.new(
      hash[0...16],
      version: UUID::Version::V3,
      variant: UUID::Variant::RFC4122
    )
  end

  def self.uuid4
    UUID.random
  end

  def self.uuid5(namespace : UUID, value)
    hash = Digest::SHA1.digest do |ctx|
      ctx.update namespace.bytes
      ctx.update value
    end
    UUID.new(
      hash[0...16],
      version: UUID::Version::V5,
      variant: UUID::Variant::RFC4122
    )
  end
end
