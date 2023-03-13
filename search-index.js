crystal_doc_search_index_callback({"repository_name":"uuid_utils","body":"# UUID utilities to support v3, v4 and v5\n\n**TODO**: v1 and v2 are not yet supported.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     uuid_utils:\n       github: aravindavk/uuid_utils\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"uuid_utils\"\n\nnamespace = UUID.new(\"68ab717d-d847-4277-be1a-303be8ac3d97\")\nmsg = \"Hello World!\"\nputs UUID.uuid3(namespace, msg) # 33056d85-5061-31c8-9656-df07f3eec397\n\n# Same as UUID.random\nputs UUID.uuid4 # 39e54402-44c6-42c6-be52-4bb9ab18a5fa\n\nputs UUID.uuid5(namespace, msg) # 562ed049-5b55-582d-ba51-812a786927ca\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/aravindavk/uuid_utils/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Aravinda Vishwanathapura](https://github.com/aravindavk) - creator and maintainer\n","program":{"html_id":"uuid_utils/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"uuid_utils","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"uuid_utils/UUID","path":"UUID.html","kind":"struct","full_name":"UUID","name":"UUID","abstract":false,"superclass":{"html_id":"uuid_utils/Struct","kind":"struct","full_name":"Struct","name":"Struct"},"ancestors":[{"html_id":"uuid_utils/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"},{"html_id":"uuid_utils/Struct","kind":"struct","full_name":"Struct","name":"Struct"},{"html_id":"uuid_utils/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"uuid_utils/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/uuid_utils.cr","line_number":7,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L7"}],"repository_name":"uuid_utils","program":false,"enum":false,"alias":false,"const":false,"included_modules":[{"html_id":"uuid_utils/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"}],"doc":"Represents a UUID (Universally Unique IDentifier).","summary":"<p>Represents a UUID (Universally Unique IDentifier).</p>","class_methods":[{"html_id":"uuid3(ns:UUID|Namespace,value)-class-method","name":"uuid3","doc":"Generate a UUID from the MD5 hash of a namespace UUID and a name.\n\nExample:\n```\nrequire \"uuid_utils\"\n\nnamespace = UUID.new(\"68ab717d-d847-4277-be1a-303be8ac3d97\")\nmsg = \"Hello World!\"\nputs UUID.uuid3(namespace, msg) # => 33056d85-5061-31c8-9656-df07f3eec397\n```","summary":"<p>Generate a UUID from the MD5 hash of a namespace UUID and a name.</p>","abstract":false,"args":[{"name":"ns","external_name":"ns","restriction":"UUID | Namespace"},{"name":"value","external_name":"value","restriction":""}],"args_string":"(ns : UUID | Namespace, value)","args_html":"(ns : <a href=\"UUID.html\">UUID</a> | <a href=\"UUID/Namespace.html\">Namespace</a>, value)","location":{"filename":"src/uuid_utils.cr","line_number":43,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L43"},"def":{"name":"uuid3","args":[{"name":"ns","external_name":"ns","restriction":"UUID | Namespace"},{"name":"value","external_name":"value","restriction":""}],"visibility":"Public","body":"ns = namespace(ns)\nhash = Digest::MD5.digest do |ctx|\n  ctx.update(ns.bytes)\n  ctx.update(value)\nend\nUUID.new(hash[0...16], version: UUID::Version::V3, variant: UUID::Variant::RFC4122)\n"}},{"html_id":"uuid4-class-method","name":"uuid4","doc":"Generate a random UUID.\n\nExample:\n```\nrequire \"uuid_utils\"\n\nputs UUID.uuid4 # => 39e54402-44c6-42c6-be52-4bb9ab18a5fa\n```","summary":"<p>Generate a random UUID.</p>","abstract":false,"location":{"filename":"src/uuid_utils.cr","line_number":64,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L64"},"def":{"name":"uuid4","visibility":"Public","body":"UUID.random"}},{"html_id":"uuid5(ns:UUID|Namespace,value)-class-method","name":"uuid5","doc":"Generate a UUID from the SHA-1 hash of a namespace UUID and a name.\n\nExample:\n```\nrequire \"uuid_utils\"\n\nnamespace = UUID.new(\"68ab717d-d847-4277-be1a-303be8ac3d97\")\nmsg = \"Hello World!\"\nputs UUID.uuid5(namespace, msg) # => 562ed049-5b55-582d-ba51-812a786927ca\n```","summary":"<p>Generate a UUID from the SHA-1 hash of a namespace UUID and a name.</p>","abstract":false,"args":[{"name":"ns","external_name":"ns","restriction":"UUID | Namespace"},{"name":"value","external_name":"value","restriction":""}],"args_string":"(ns : UUID | Namespace, value)","args_html":"(ns : <a href=\"UUID.html\">UUID</a> | <a href=\"UUID/Namespace.html\">Namespace</a>, value)","location":{"filename":"src/uuid_utils.cr","line_number":78,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L78"},"def":{"name":"uuid5","args":[{"name":"ns","external_name":"ns","restriction":"UUID | Namespace"},{"name":"value","external_name":"value","restriction":""}],"visibility":"Public","body":"ns = namespace(ns)\nhash = Digest::SHA1.digest do |ctx|\n  ctx.update(ns.bytes)\n  ctx.update(value)\nend\nUUID.new(hash[0...16], version: UUID::Version::V5, variant: UUID::Variant::RFC4122)\n"}}],"types":[{"html_id":"uuid_utils/UUID/Namespace","path":"UUID/Namespace.html","kind":"enum","full_name":"UUID::Namespace","name":"Namespace","abstract":false,"ancestors":[{"html_id":"uuid_utils/Enum","kind":"struct","full_name":"Enum","name":"Enum"},{"html_id":"uuid_utils/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"},{"html_id":"uuid_utils/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"uuid_utils/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/uuid_utils.cr","line_number":9,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L9"}],"repository_name":"uuid_utils","program":false,"enum":true,"alias":false,"const":false,"constants":[{"id":"DNS","name":"DNS","value":"0","doc":"NameSpace_DNS","summary":"<p>NameSpace_DNS</p>"},{"id":"URL","name":"URL","value":"1","doc":"NameSpace_URL","summary":"<p>NameSpace_URL</p>"},{"id":"OID","name":"OID","value":"2","doc":"NameSpace_OID","summary":"<p>NameSpace_OID</p>"},{"id":"X500","name":"X500","value":"3","doc":"NameSpace_X500","summary":"<p>NameSpace_X500</p>"}],"namespace":{"html_id":"uuid_utils/UUID","kind":"struct","full_name":"UUID","name":"UUID"},"doc":"Default namespaces","summary":"<p>Default namespaces</p>","instance_methods":[{"html_id":"dns?-instance-method","name":"dns?","abstract":false,"location":{"filename":"src/uuid_utils.cr","line_number":11,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L11"},"def":{"name":"dns?","visibility":"Public","body":"self == DNS"}},{"html_id":"oid?-instance-method","name":"oid?","abstract":false,"location":{"filename":"src/uuid_utils.cr","line_number":17,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L17"},"def":{"name":"oid?","visibility":"Public","body":"self == OID"}},{"html_id":"url?-instance-method","name":"url?","abstract":false,"location":{"filename":"src/uuid_utils.cr","line_number":14,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L14"},"def":{"name":"url?","visibility":"Public","body":"self == URL"}},{"html_id":"x500?-instance-method","name":"x500?","abstract":false,"location":{"filename":"src/uuid_utils.cr","line_number":20,"url":"https://github.com/aravindavk/uuid_utils/blob/e965dfb07bc70736ff0cae16f5c2e54b2f108768/src/uuid_utils.cr#L20"},"def":{"name":"x500?","visibility":"Public","body":"self == X500"}}]}]}]}})