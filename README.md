# ts-http-codes

Enum of HTTP status codes, messages and categories for TypeScript.

## Installation

```bash
npm install ts-http-codes
```

## Usage

### Message

```typescript
import { HttpStatusCode, httpStatusMessage } from 'ts-http-codes';

console.log(httpStatusMessage(200)); // OK
console.log(httpStatusMessage(HttpStatusCode.Ok_200)); // OK
console.log(httpStatusMessage(999)); // throws Error: Unknown HTTP status code: 999
console.log(findHttpStatusMessage(999)); // undefined
```

### Category

```typescript
import { HttpStatusCode, httpStatusCategory } from 'ts-http-codes';

console.log(httpStatusCategory(200)); // Success
console.log(httpStatusCategory(HttpStatusCode.Ok_200)); // Success
console.log(httpStatusCategory(999)); // throws Error: Unknown HTTP status code: 999
console.log(findHttpStatusCategory(999)); // undefined
```

## HTTP Status Codes

```typescript
export enum HttpStatusCode {
    Continue_100 = 100,
    SwitchingProtocols_101 = 101,
    Processing_102 = 102,
    EarlyHints_103 = 103,
    Ok_200 = 200,
    Created_201 = 201,
    Accepted_202 = 202,
    NonAuthoritativeInformation_203 = 203,
    NoContent_204 = 204,
    ResetContent_205 = 205,
    PartialContent_206 = 206,
    MultiStatus_207 = 207,
    MultipleChoices_300 = 300,
    MovedPermanently_301 = 301,
    MovedTemporarily_302 = 302,
    SeeOther_303 = 303,
    NotModified_304 = 304,
    UseProxy_305 = 305,
    TemporaryRedirect_307 = 307,
    PermanentRedirect_308 = 308,
    BadRequest_400 = 400,
    Unauthorized_401 = 401,
    PaymentRequired_402 = 402,
    Forbidden_403 = 403,
    NotFound_404 = 404,
    MethodNotAllowed_405 = 405,
    NotAcceptable_406 = 406,
    ProxyAuthenticationRequired_407 = 407,
    RequestTimeout_408 = 408,
    Conflict_409 = 409,
    Gone_410 = 410,
    LengthRequired_411 = 411,
    PreconditionFailed_412 = 412,
    RequestEntityTooLarge_413 = 413,
    RequestURITooLong_414 = 414,
    UnsupportedMediaType_415 = 415,
    RequestedRangeNotSatisfiable_416 = 416,
    ExpectationFailed_417 = 417,
    ImATeapot_418 = 418,
    InsufficientSpaceOnResource_419 = 419,
    MethodFailure_420 = 420,
    MisdirectedRequest_421 = 421,
    UnprocessableEntity_422 = 422,
    Locked_423 = 423,
    FailedDependency_424 = 424,
    UpgradeRequired_426 = 426,
    PreconditionRequired_428 = 428,
    TooManyRequests_429 = 429,
    RequestHeaderFieldsTooLarge_431 = 431,
    UnavailableForLegalReasons_451 = 451,
    InternalServerError_500 = 500,
    NotImplemented_501 = 501,
    BadGateway_502 = 502,
    ServiceUnavailable_503 = 503,
    GatewayTimeout_504 = 504,
    HTTPVersionNotSupported_505 = 505,
    InsufficientStorage_507 = 507,
    NetworkAuthenticationRequired_511 = 511,
}
```

## HTTP Status Messages

```typescript

export enum HttpStatusMessage {
    Continue_100 = 'Continue',
    SwitchingProtocols_101 = 'Switching Protocols',
    Processing_102 = 'Processing',
    EarlyHints_103 = 'Early Hints',
    Ok_200 = 'OK',
    Created_201 = 'Created',
    Accepted_202 = 'Accepted',
    NonAuthoritativeInformation_203 = 'Non Authoritative Information',
    NoContent_204 = 'No Content',
    ResetContent_205 = 'Reset Content',
    PartialContent_206 = 'Partial Content',
    MultiStatus_207 = 'Multi-Status',
    MultipleChoices_300 = 'Multiple Choices',
    MovedPermanently_301 = 'Moved Permanently',
    MovedTemporarily_302 = 'Moved Temporarily',
    SeeOther_303 = 'See Other',
    NotModified_304 = 'Not Modified',
    UseProxy_305 = 'Use Proxy',
    TemporaryRedirect_307 = 'Temporary Redirect',
    PermanentRedirect_308 = 'Permanent Redirect',
    BadRequest_400 = 'Bad Request',
    Unauthorized_401 = 'Unauthorized',
    PaymentRequired_402 = 'Payment Required',
    Forbidden_403 = 'Forbidden',
    NotFound_404 = 'Not Found',
    MethodNotAllowed_405 = 'Method Not Allowed',
    NotAcceptable_406 = 'Not Acceptable',
    ProxyAuthenticationRequired_407 = 'Proxy Authentication Required',
    RequestTimeout_408 = 'Request Timeout',
    Conflict_409 = 'Conflict',
    Gone_410 = 'Gone',
    LengthRequired_411 = 'Length Required',
    PreconditionFailed_412 = 'Precondition Failed',
    RequestEntityTooLarge_413 = 'Request Entity Too Large',
    RequestURITooLong_414 = 'Request-URI Too Long',
    UnsupportedMediaType_415 = 'Unsupported Media Type',
    RequestedRangeNotSatisfiable_416 = 'Requested Range Not Satisfiable',
    ExpectationFailed_417 = 'Expectation Failed',
    ImATeapot_418 = 'I\'m a teapot',
    InsufficientSpaceOnResource_419 = 'Insufficient Space on Resource',
    MethodFailure_420 = 'Method Failure',
    MisdirectedRequest_421 = 'Misdirected Request',
    UnprocessableEntity_422 = 'Unprocessable Entity',
    Locked_423 = 'Locked',
    FailedDependency_424 = 'Failed Dependency',
    UpgradeRequired_426 = 'Upgrade Required',
    PreconditionRequired_428 = 'Precondition Required',
    TooManyRequests_429 = 'Too Many Requests',
    RequestHeaderFieldsTooLarge_431 = 'Request Header Fields Too Large',
    UnavailableForLegalReasons_451 = 'Unavailable For Legal Reasons',
    InternalServerError_500 = 'Internal Server Error',
    NotImplemented_501 = 'Not Implemented',
    BadGateway_502 = 'Bad Gateway',
    ServiceUnavailable_503 = 'Service Unavailable',
    GatewayTimeout_504 = 'Gateway Timeout',
    HTTPVersionNotSupported_505 = 'HTTP Version Not Supported',
    InsufficientStorage_507 = 'Insufficient Storage',
    NetworkAuthenticationRequired_511 = 'Network Authentication Required',
}
```

## HTTP Status Categories

```typescript
export enum HttpStatusCategory {
    Informational_1xx = 'Informational',
    Success_2xx = 'Success',
    Redirection_3xx = 'Redirection',
    ClientError_4xx = 'Client Error',
    ServerError_5xx = 'Server Error',
}
```