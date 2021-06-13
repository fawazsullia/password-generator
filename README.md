# Passwordinator
### Generate random passwords of varying complexity

## About

Passwordinator is an API that lets you generate random passwords of varying complexity in your app/website. 
The api is free and can be accessed at any origin.

## How to access

Passwordinator lives at https://passwordinator.herokuapp.com

/generate end point gives you access to a 8 character long password made of small case alphabets

### Customization

You can add queries to /generate to customize the password

Available queries
- ?num=true ( adds number to the password )
- ?char=true (adds special character to the password )
- ?caps=true ( adds uppercase alphabets to the password )
- ?len=14 ( generates a 14 character password )


## Response format

The API returns a response in json format;

`{ "data" : "sAl7*KladK" }`

## Code example

` fetch('https://passwordinator.herokuapp.com/generate') `

On resolving the response, generates asbysaga

`fetch('https://passwordinator.herokuapp.com/generate?num=true&char=true&caps=true&len=14')`
On resolving generates a 14 digit password with characters, alphabets, uppercase letters and numbers

I will slowly refine the doc. Watchout for new features!


Found this useful? Let's connect on [Twitter](https://www.twitter.com/realfawazsullia)
