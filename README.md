# UUID utilities to support v3, v4 and v5

**TODO**: v1 and v2 are not yet supported.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     uuid_utils:
       github: aravindavk/uuid_utils
   ```

2. Run `shards install`

## Usage

```crystal
require "uuid_utils"

namespace = UUID.new("68ab717d-d847-4277-be1a-303be8ac3d97")
msg = "Hello World!"
puts UUID.uuid3(namespace, msg) # 33056d85-5061-31c8-9656-df07f3eec397

# Same as UUID.random
puts UUID.uuid4 # 39e54402-44c6-42c6-be52-4bb9ab18a5fa

puts UUID.uuid5(namespace, msg) # 562ed049-5b55-582d-ba51-812a786927ca
```

## Contributing

1. Fork it (<https://github.com/aravindavk/uuid_utils/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [Aravinda Vishwanathapura](https://github.com/aravindavk) - creator and maintainer
