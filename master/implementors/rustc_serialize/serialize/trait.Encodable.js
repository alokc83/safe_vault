(function() {var implementors = {};
implementors['uuid'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='uuid/struct.Uuid.html' title='uuid::Uuid'>Uuid</a>",];implementors['socket_addr'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='socket_addr/struct.SocketAddr.html' title='socket_addr::SocketAddr'>SocketAddr</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='socket_addr/struct.SocketAddrV4.html' title='socket_addr::SocketAddrV4'>SocketAddrV4</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='socket_addr/struct.SocketAddrV6.html' title='socket_addr::SocketAddrV6'>SocketAddrV6</a>",];implementors['url'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='url/struct.Url.html' title='url::Url'>Url</a>",];implementors['cbor'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='cbor/struct.CborBytes.html' title='cbor::CborBytes'>CborBytes</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='cbor/struct.CborTag.html' title='cbor::CborTag'>CborTag</a>","impl&lt;'a, T: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + 'a&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='cbor/struct.CborTagEncode.html' title='cbor::CborTagEncode'>CborTagEncode</a>&lt;'a, T&gt;","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='cbor/enum.Cbor.html' title='cbor::Cbor'>Cbor</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='cbor/enum.CborUnsigned.html' title='cbor::CborUnsigned'>CborUnsigned</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='cbor/enum.CborSigned.html' title='cbor::CborSigned'>CborSigned</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='cbor/enum.CborFloat.html' title='cbor::CborFloat'>CborFloat</a>",];implementors['sodiumoxide'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PublicKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.SecretKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PrecomputedKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PrecomputedKey'>PrecomputedKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Seed.html' title='sodiumoxide::crypto::sign::ed25519::Seed'>Seed</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.SecretKey.html' title='sodiumoxide::crypto::sign::ed25519::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.PublicKey.html' title='sodiumoxide::crypto::sign::ed25519::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Signature.html' title='sodiumoxide::crypto::sign::ed25519::Signature'>Signature</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/edwards25519sha512batch/struct.SecretKey.html' title='sodiumoxide::crypto::sign::edwards25519sha512batch::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/edwards25519sha512batch/struct.PublicKey.html' title='sodiumoxide::crypto::sign::edwards25519sha512batch::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.Scalar.html' title='sodiumoxide::crypto::scalarmult::curve25519::Scalar'>Scalar</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.GroupElement.html' title='sodiumoxide::crypto::scalarmult::curve25519::GroupElement'>GroupElement</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha512/struct.Digest.html' title='sodiumoxide::crypto::hash::sha512::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha256/struct.Digest.html' title='sodiumoxide::crypto::hash::sha256::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Key.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Key.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Tag.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.Salt.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::Salt'>Salt</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.HashedPassword.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::HashedPassword'>HashedPassword</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Key.html' title='sodiumoxide::crypto::stream::xsalsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::xsalsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Key.html' title='sodiumoxide::crypto::stream::aes128ctr::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Nonce.html' title='sodiumoxide::crypto::stream::aes128ctr::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Key.html' title='sodiumoxide::crypto::stream::salsa208::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa208::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Key.html' title='sodiumoxide::crypto::stream::salsa2012::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa2012::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Key.html' title='sodiumoxide::crypto::stream::salsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Key.html' title='sodiumoxide::crypto::stream::chacha20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Nonce.html' title='sodiumoxide::crypto::stream::chacha20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Digest.html' title='sodiumoxide::crypto::shorthash::siphash24::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Key.html' title='sodiumoxide::crypto::shorthash::siphash24::Key'>Key</a>",];implementors['num'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='num/bigint/enum.Sign.html' title='num::bigint::Sign'>Sign</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='num/complex/struct.Complex.html' title='num::complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors['secure_serialisation'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='secure_serialisation/struct.PublicKey.html' title='secure_serialisation::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='secure_serialisation/struct.SecretKey.html' title='secure_serialisation::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='secure_serialisation/struct.PrecomputedKey.html' title='secure_serialisation::PrecomputedKey'>PrecomputedKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Seed.html' title='sodiumoxide::crypto::sign::ed25519::Seed'>Seed</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.SecretKey.html' title='sodiumoxide::crypto::sign::ed25519::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.PublicKey.html' title='sodiumoxide::crypto::sign::ed25519::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Signature.html' title='sodiumoxide::crypto::sign::ed25519::Signature'>Signature</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/edwards25519sha512batch/struct.SecretKey.html' title='sodiumoxide::crypto::sign::edwards25519sha512batch::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/edwards25519sha512batch/struct.PublicKey.html' title='sodiumoxide::crypto::sign::edwards25519sha512batch::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.Scalar.html' title='sodiumoxide::crypto::scalarmult::curve25519::Scalar'>Scalar</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.GroupElement.html' title='sodiumoxide::crypto::scalarmult::curve25519::GroupElement'>GroupElement</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha512/struct.Digest.html' title='sodiumoxide::crypto::hash::sha512::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha256/struct.Digest.html' title='sodiumoxide::crypto::hash::sha256::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Key.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Key.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Tag.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.Salt.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::Salt'>Salt</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.HashedPassword.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::HashedPassword'>HashedPassword</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Key.html' title='sodiumoxide::crypto::stream::xsalsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::xsalsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Key.html' title='sodiumoxide::crypto::stream::aes128ctr::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Nonce.html' title='sodiumoxide::crypto::stream::aes128ctr::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Key.html' title='sodiumoxide::crypto::stream::salsa208::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa208::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Key.html' title='sodiumoxide::crypto::stream::salsa2012::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa2012::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Key.html' title='sodiumoxide::crypto::stream::salsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Key.html' title='sodiumoxide::crypto::stream::chacha20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Nonce.html' title='sodiumoxide::crypto::stream::chacha20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Digest.html' title='sodiumoxide::crypto::shorthash::siphash24::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Key.html' title='sodiumoxide::crypto::shorthash::siphash24::Key'>Key</a>",];implementors['xor_name'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='xor_name/struct.XorName.html' title='xor_name::XorName'>XorName</a>",];implementors['mpid_messaging'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='mpid_messaging/struct.MpidHeader.html' title='mpid_messaging::MpidHeader'>MpidHeader</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='mpid_messaging/struct.MpidMessage.html' title='mpid_messaging::MpidMessage'>MpidMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='mpid_messaging/enum.MpidMessageWrapper.html' title='mpid_messaging::MpidMessageWrapper'>MpidMessageWrapper</a>",];implementors['hyper'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='hyper/struct.Url.html' title='hyper::Url'>Url</a>",];implementors['nat_traversal'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='nat_traversal/struct.MappedSocketAddr.html' title='nat_traversal::MappedSocketAddr'>MappedSocketAddr</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='nat_traversal/struct.PubRendezvousInfo.html' title='nat_traversal::PubRendezvousInfo'>PubRendezvousInfo</a>",];implementors['crust'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crust/struct.SocketAddr.html' title='crust::SocketAddr'>SocketAddr</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='socket_addr/struct.SocketAddrV4.html' title='socket_addr::SocketAddrV4'>SocketAddrV4</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='socket_addr/struct.SocketAddrV6.html' title='socket_addr::SocketAddrV6'>SocketAddrV6</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crust/struct.TheirConnectionInfo.html' title='crust::TheirConnectionInfo'>TheirConnectionInfo</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='crust/enum.Protocol.html' title='crust::Protocol'>Protocol</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crust/struct.Endpoint.html' title='crust::Endpoint'>Endpoint</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crust/struct.StaticContactInfo.html' title='crust::StaticContactInfo'>StaticContactInfo</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crust/struct.PeerId.html' title='crust::PeerId'>PeerId</a>",];implementors['routing'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='routing/enum.Authority.html' title='routing::Authority'>Authority</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='routing/enum.Data.html' title='routing::Data'>Data</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='routing/enum.DataRequest.html' title='routing::DataRequest'>DataRequest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='routing/struct.PublicId.html' title='routing::PublicId'>PublicId</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='routing/enum.ImmutableDataType.html' title='routing::ImmutableDataType'>ImmutableDataType</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='routing/struct.ImmutableData.html' title='routing::ImmutableData'>ImmutableData</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='routing/struct.SignedMessage.html' title='routing::SignedMessage'>SignedMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='routing/enum.RoutingMessage.html' title='routing::RoutingMessage'>RoutingMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='routing/struct.RequestMessage.html' title='routing::RequestMessage'>RequestMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='routing/struct.ResponseMessage.html' title='routing::ResponseMessage'>ResponseMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='routing/enum.RequestContent.html' title='routing::RequestContent'>RequestContent</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='routing/enum.ResponseContent.html' title='routing::ResponseContent'>ResponseContent</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='routing/struct.PlainData.html' title='routing::PlainData'>PlainData</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='routing/struct.StructuredData.html' title='routing::StructuredData'>StructuredData</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='routing/struct.MessageId.html' title='routing::MessageId'>MessageId</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
