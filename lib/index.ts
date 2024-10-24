export enum HttpStatusCode {
    /**
     * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.2.1}
     */
    Continue_100 = 100,

    /**
     * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.2.2}
     */
    SwitchingProtocols_101 = 101,

    /**
     * This code indicates that the server has received and is processing the request, but no response is available yet.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.1}
     */
    Processing_102 = 102,

    /**
     * This code indicates to the client that the server is likely to send a final response with the header fields included in the informational response.
     *
     * @see {@link https://www.rfc-editor.org/rfc/rfc8297#page-3}
     */
    EarlyHints_103 = 103,

    /**
     * The request has succeeded. The meaning of a success varies depending on the HTTP method:
     * GET: The resource has been fetched and is transmitted in the message body.
     * HEAD: The entity headers are in the message body.
     * POST: The resource describing the result of the action is transmitted in the message body.
     * TRACE: The message body contains the request message as received by the server
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.1}
     */
    Ok_200 = 200,

    /**
     * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
     */
    Created_201 = 201,

    /**
     * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
     */
    Accepted_202 = 202,

    /**
     * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.4}
     */
    NonAuthoritativeInformation_203 = 203,

    /**
     * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.5}
     */
    NoContent_204 = 204,

    /**
     * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.6}
     */
    ResetContent_205 = 205,

    /**
     * This response code is used because of range header sent by the client to separate download into multiple streams.
     *
     * @see {@link https://tools.ietf.org/html/rfc7233#section-4.1}
     */
    PartialContent_206 = 206,

    /**
     * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.2}
     */
    MultiStatus_207 = 207,

    /**
     * The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
     *
     * @see {@link https://tools.ietf.org/html/rfc5842#section-7.1}
     */
    AlreadyReported_208 = 208,

    /**
     * The server has fulfilled a GET request for the resource, and the response is a representation of the result of one
     * or more instance-manipulations applied to the current instance.
     *
     * @see {@link https://tools.ietf.org/html/rfc3229#section-10.4.1}
     */
    IMUsed_226 = 226,

    /**
     * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.1}
     */
    MultipleChoices_300 = 300,

    /**
     * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.2}
     */
    MovedPermanently_301 = 301,

    /**
     * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.3}
     */
    MovedTemporarily_302 = 302,

    /**
     * Server sent this response to directing client to get requested resource to another URI with an GET request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.4}
     */
    SeeOther_303 = 303,

    /**
     * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7232#section-4.1}
     */
    NotModified_304 = 304,

    /**
     * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
     *
     * @deprecated
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.6}
     */
    UseProxy_305 = 305,

    /**
     * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.7}
     */
    TemporaryRedirect_307 = 307,

    /**
     * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7538#section-3}
     */
    PermanentRedirect_308 = 308,

    /**
     * This response means that server could not understand the request due to invalid syntax.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
     */
    BadRequest_400 = 400,

    /**
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7235#section-3.1}
     */
    Unauthorized_401 = 401,

    /**
     * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.2}
     */
    PaymentRequired_402 = 402,

    /**
     * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
     */
    Forbidden_403 = 403,

    /**
     * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
     */
    NotFound_404 = 404,

    /**
     * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
     */
    MethodNotAllowed_405 = 405,

    /**
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.6}
     */
    NotAcceptable_406 = 406,

    /**
     * This is similar to 401 but authentication is needed to be done by a proxy.
     *
     * @see {@link https://tools.ietf.org/html/rfc7235#section-3.2}
     */
    ProxyAuthenticationRequired_407 = 407,

    /**
     * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.7}
     */
    RequestTimeout_408 = 408,

    /**
     * This response is sent when a request conflicts with the current state of the server.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.8}
     */
    Conflict_409 = 409,

    /**
     * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.9}
     */
    Gone_410 = 410,

    /**
     * The server rejected the request because the Content-Length header field is not defined and the server requires it.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.10}
     */
    LengthRequired_411 = 411,

    /**
     * The client has indicated preconditions in its headers which the server does not meet.
     *
     * @see {@link https://tools.ietf.org/html/rfc7232#section-4.2}
     */
    PreconditionFailed_412 = 412,

    /**
     * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.11}
     */
    RequestEntityTooLarge_413 = 413,

    /**
     * The URI requested by the client is longer than the server is willing to interpret.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.12}
     */
    RequestURITooLong_414 = 414,

    /**
     * The media format of the requested data is not supported by the server, so the server is rejecting the request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.13}
     */
    UnsupportedMediaType_415 = 415,

    /**
     * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
     *
     * @see {@link https://tools.ietf.org/html/rfc7233#section-4.4}
     */
    RequestedRangeNotSatisfiable_416 = 416,

    /**
     * This response code means the expectation indicated by the Expect request header field can't be met by the server.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.14}
     */
    ExpectationFailed_417 = 417,

    /**
     * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
     *
     * @see {@link https://tools.ietf.org/html/rfc2324#section-2.3.2}
     */
    ImATeapot_418 = 418,

    /**
     * Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response for the combination of scheme and authority that are included in the request URI.
     *
     * @see {@link https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2}
     */
    MisdirectedRequest_421 = 421,

    /**
     * The request was well-formed but was unable to be followed due to semantic errors.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.3}
     */
    UnprocessableEntity_422 = 422,

    /**
     * The resource that is being accessed is locked.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.4}
     */
    Locked_423 = 423,

    /**
     * The request failed due to failure of a previous request.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.5}
     */
    FailedDependency_424 = 424,

    /**
     * Indicates that the server is unwilling to risk processing a request that might be replayed.
     *
     * @see {@link https://tools.ietf.org/html/rfc8470#section-5}
     */
    TooEarly_425 = 425,

    /**
     * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
     *
     * @see {@link https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15}
     */
    UpgradeRequired_426 = 426,

    /**
     * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
     *
     * @see {@link https://tools.ietf.org/html/rfc6585#section-3}
     */
    PreconditionRequired_428 = 428,

    /**
     * The user has sent too many requests in a given amount of time ("rate limiting").
     *
     * @see {@link https://tools.ietf.org/html/rfc6585#section-5}
     */
    TooManyRequests_429 = 429,

    /**
     * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
     *
     * @see {@link https://tools.ietf.org/html/rfc6585#section-6}
     */
    RequestHeaderFieldsTooLarge_431 = 431,

    /**
     * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
     *
     * @see {@link https://tools.ietf.org/html/rfc7725}
     */
    UnavailableForLegalReasons_451 = 451,

    /**
     * The server encountered an unexpected condition that prevented it from fulfilling the request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
     */
    InternalServerError_500 = 500,

    /**
     * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.2}
     */
    NotImplemented_501 = 501,

    /**
     * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
     */
    BadGateway_502 = 502,

    /**
     * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
     */
    ServiceUnavailable_503 = 503,

    /**
     * This error response is given when the server is acting as a gateway and cannot get a response in time.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.5}
     */
    GatewayTimeout_504 = 504,

    /**
     * The HTTP version used in the request is not supported by the server.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.6}
     */
    HTTPVersionNotSupported_505 = 505,

    /**
     * Transparent content negotiation for the request results in a circular reference.
     *
     * @see {@link https://tools.ietf.org/html/rfc2295#section-8.1}
     */
    VariantAlsoNegotiates_506 = 506,

    /**
     * The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request which received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.6}
     */
    InsufficientStorage_507 = 507,

    /**
     * The server detected an infinite loop while processing the request.
     *
     * @see {@link https://tools.ietf.org/html/rfc5842#section-7.2}
     */
    LoopDetected_508 = 508,

    /**
     * The 511 status code indicates that the client needs to authenticate to gain network access.
     *
     * @see {@link https://tools.ietf.org/html/rfc6585#section-6}
     */
    NetworkAuthenticationRequired_511 = 511,
}

export enum HttpStatusMessage {
    /**
     * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.2.1}
     */
    Continue_100 = 'Continue',

    /**
     * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.2.2}
     */
    SwitchingProtocols_101 = 'Switching Protocols',

    /**
     * This code indicates that the server has received and is processing the request, but no response is available yet.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.1}
     */
    Processing_102 = 'Processing',

    /**
     * This code indicates to the client that the server is likely to send a final response with the header fields included in the informational response.
     *
     * @see {@link https://www.rfc-editor.org/rfc/rfc8297#page-3}
     */
    EarlyHints_103 = 'Early Hints',

    /**
     * The request has succeeded. The meaning of a success varies depending on the HTTP method:
     * GET: The resource has been fetched and is transmitted in the message body.
     * HEAD: The entity headers are in the message body.
     * POST: The resource describing the result of the action is transmitted in the message body.
     * TRACE: The message body contains the request message as received by the server
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.1}
     */
    Ok_200 = 'OK',

    /**
     * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
     */
    Created_201 = 'Created',

    /**
     * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
     */
    Accepted_202 = 'Accepted',

    /**
     * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.4}
     */
    NonAuthoritativeInformation_203 = 'Non-Authoritative Information',

    /**
     * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.5}
     */
    NoContent_204 = 'No Content',

    /**
     * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.3.6}
     */
    ResetContent_205 = 'Reset Content',

    /**
     * This response code is used because of range header sent by the client to separate download into multiple streams.
     *
     * @see {@link https://tools.ietf.org/html/rfc7233#section-4.1}
     */
    PartialContent_206 = 'Partial Content',

    /**
     * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.2}
     */
    MultiStatus_207 = 'Multi-Status',

    /**
     * The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
     *
     * @see {@link https://tools.ietf.org/html/rfc5842#section-7.1}
     */
    AlreadyReported_208 = 'Already Reported',

    /**
     * The server has fulfilled a GET request for the resource, and the response is a representation of the result of one
     * or more instance-manipulations applied to the current instance.
     *
     * @see {@link https://tools.ietf.org/html/rfc3229#section-10.4.1}
     */
    IMUsed_226 = 'IM Used',

    /**
     * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.1}
     */
    MultipleChoices_300 = 'Multiple Choices',

    /**
     * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.2}
     */
    MovedPermanently_301 = 'Moved Permanently',

    /**
     * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.3}
     */
    MovedTemporarily_302 = 'Moved Temporarily',

    /**
     * Server sent this response to directing client to get requested resource to another URI with an GET request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.4}
     */
    SeeOther_303 = 'See Other',

    /**
     * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7232#section-4.1}
     */
    NotModified_304 = 'Not Modified',

    /**
     * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
     *
     * @deprecated
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.6}
     */
    UseProxy_305 = 'Use Proxy',

    /**
     * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.4.7}
     */
    TemporaryRedirect_307 = 'Temporary Redirect',

    /**
     * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7538#section-3}
     */
    PermanentRedirect_308 = 'Permanent Redirect',

    /**
     * This response means that server could not understand the request due to invalid syntax.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
     */
    BadRequest_400 = 'Bad Request',

    /**
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7235#section-3.1}
     */
    Unauthorized_401 = 'Unauthorized',

    /**
     * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.2}
     */
    PaymentRequired_402 = 'Payment Required',

    /**
     * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
     */
    Forbidden_403 = 'Forbidden',

    /**
     * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
     */
    NotFound_404 = 'Not Found',

    /**
     * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
     */
    MethodNotAllowed_405 = 'Method Not Allowed',

    /**
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.6}
     */
    NotAcceptable_406 = 'Not Acceptable',

    /**
     * This is similar to 401 but authentication is needed to be done by a proxy.
     *
     * @see {@link https://tools.ietf.org/html/rfc7235#section-3.2}
     */
    ProxyAuthenticationRequired_407 = 'Proxy Authentication Required',

    /**
     * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.7}
     */
    RequestTimeout_408 = 'Request Timeout',

    /**
     * This response is sent when a request conflicts with the current state of the server.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.8}
     */
    Conflict_409 = 'Conflict',

    /**
     * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.9}
     */
    Gone_410 = 'Gone',

    /**
     * The server rejected the request because the Content-Length header field is not defined and the server requires it.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.10}
     */
    LengthRequired_411 = 'Length Required',

    /**
     * The client has indicated preconditions in its headers which the server does not meet.
     *
     * @see {@link https://tools.ietf.org/html/rfc7232#section-4.2}
     */
    PreconditionFailed_412 = 'Precondition Failed',

    /**
     * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.11}
     */
    RequestEntityTooLarge_413 = 'Request Entity Too Large',

    /**
     * The URI requested by the client is longer than the server is willing to interpret.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.12}
     */
    RequestURITooLong_414 = 'Request-URI Too Long',

    /**
     * The media format of the requested data is not supported by the server, so the server is rejecting the request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.13}
     */
    UnsupportedMediaType_415 = 'Unsupported Media Type',

    /**
     * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
     *
     * @see {@link https://tools.ietf.org/html/rfc7233#section-4.4}
     */
    RequestedRangeNotSatisfiable_416 = 'Requested Range Not Satisfiable',

    /**
     * This response code means the expectation indicated by the Expect request header field can't be met by the server.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.5.14}
     */
    ExpectationFailed_417 = 'Expectation Failed',

    /**
     * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
     *
     * @see {@link https://tools.ietf.org/html/rfc2324#section-2.3.2}
     */
    ImATeapot_418 = 'I\'m a teapot',

    /**
     * Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response for the combination of scheme and authority that are included in the request URI.
     *
     * @see {@link https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2}
     */
    MisdirectedRequest_421 = 'Misdirected Request',

    /**
     * The request was well-formed but was unable to be followed due to semantic errors.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.3}
     */
    UnprocessableEntity_422 = 'Unprocessable Entity',

    /**
     * The resource that is being accessed is locked.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.4}
     */
    Locked_423 = 'Locked',

    /**
     * The request failed due to failure of a previous request.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.5}
     */
    FailedDependency_424 = 'Failed Dependency',

    /**
     * Indicates that the server is unwilling to risk processing a request that might be replayed.
     *
     * @see {@link https://tools.ietf.org/html/rfc8470#section-5}
     */
    TooEarly_425 = 'Too Early',

    /**
     * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
     *
     * @see {@link https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15}
     */
    UpgradeRequired_426 = 'Upgrade Required',

    /**
     * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
     *
     * @see {@link https://tools.ietf.org/html/rfc6585#section-3}
     */
    PreconditionRequired_428 = 'Precondition Required',

    /**
     * The user has sent too many requests in a given amount of time ("rate limiting").
     *
     * @see {@link https://tools.ietf.org/html/rfc6585#section-5}
     */
    TooManyRequests_429 = 'Too Many Requests',

    /**
     * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
     *
     * @see {@link https://tools.ietf.org/html/rfc6585#section-6}
     */
    RequestHeaderFieldsTooLarge_431 = 'Request Header Fields Too Large',

    /**
     * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
     *
     * @see {@link https://tools.ietf.org/html/rfc7725}
     */
    UnavailableForLegalReasons_451 = 'Unavailable For Legal Reasons',

    /**
     * The server encountered an unexpected condition that prevented it from fulfilling the request.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
     */
    InternalServerError_500 = 'Internal Server Error',

    /**
     * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.2}
     */
    NotImplemented_501 = 'Not Implemented',

    /**
     * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
     */
    BadGateway_502 = 'Bad Gateway',

    /**
     * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
     */
    ServiceUnavailable_503 = 'Service Unavailable',

    /**
     * This error response is given when the server is acting as a gateway and cannot get a response in time.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.5}
     */
    GatewayTimeout_504 = 'Gateway Timeout',

    /**
     * The HTTP version used in the request is not supported by the server.
     *
     * @see {@link https://tools.ietf.org/html/rfc7231#section-6.6.6}
     */
    HTTPVersionNotSupported_505 = 'HTTP Version Not Supported',

    /**
     * Transparent content negotiation for the request results in a circular reference.
     *
     * @see {@link https://tools.ietf.org/html/rfc2295#section-8.1}
     */
    VariantAlsoNegotiates_506 = 'Variant Also Negotiates',

    /**
     * The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request which received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.
     *
     * @see {@link https://tools.ietf.org/html/rfc2518#section-10.6}
     */
    InsufficientStorage_507 = 'Insufficient Storage',

    /**
     * The server detected an infinite loop while processing the request.
     *
     * @see {@link https://tools.ietf.org/html/rfc5842#section-7.2}
     */
    LoopDetected_508 = 'Loop Detected',

    /**
     * The 511 status code indicates that the client needs to authenticate to gain network access.
     *
     * @see {@link https://tools.ietf.org/html/rfc6585#section-6}
     */
    NetworkAuthenticationRequired_511 = 'Network Authentication Required',
}

export enum HttpStatusCategory {
    /**
     * The request was received, continuing process
     */
    Informational_1xx = 'Informational',

    /**
     * The request was successfully received, understood, and accepted
     */
    Success_2xx = 'Success',

    /**
     * Further action needs to be taken in order to complete the request
     */
    Redirection_3xx = 'Redirection',

    /**
     * The request contains bad syntax or cannot be fulfilled
     */
    ClientError_4xx = 'Client Error',

    /**
     * The server failed to fulfill an apparently valid request
     */
    ServerError_5xx = 'Server Error',
}


/**
 * Returns the category of the HTTP status code.
 * Categories are based on the first digit of the status code,
 * e.g. Informational_1xx, Success_2xx, Redirection_3xx, ClientError_4xx, ServerError_5xx.
 *
 * @param code The HTTP status code
 * @returns The category of the HTTP status code
 */
export function httpStatusCategory(code: HttpStatusCode): HttpStatusCategory {
    switch (code) {
        case HttpStatusCode.Continue_100:
        case HttpStatusCode.SwitchingProtocols_101:
        case HttpStatusCode.Processing_102:
        case HttpStatusCode.EarlyHints_103:
            return HttpStatusCategory.Informational_1xx;
        case HttpStatusCode.Ok_200:
        case HttpStatusCode.Created_201:
        case HttpStatusCode.Accepted_202:
        case HttpStatusCode.NonAuthoritativeInformation_203:
        case HttpStatusCode.NoContent_204:
        case HttpStatusCode.ResetContent_205:
        case HttpStatusCode.PartialContent_206:
        case HttpStatusCode.MultiStatus_207:
        case HttpStatusCode.AlreadyReported_208:
        case HttpStatusCode.IMUsed_226:
            return HttpStatusCategory.Success_2xx;
        case HttpStatusCode.MultipleChoices_300:
        case HttpStatusCode.MovedPermanently_301:
        case HttpStatusCode.MovedTemporarily_302:
        case HttpStatusCode.SeeOther_303:
        case HttpStatusCode.NotModified_304:
        case HttpStatusCode.UseProxy_305:
        case HttpStatusCode.TemporaryRedirect_307:
        case HttpStatusCode.PermanentRedirect_308:
            return HttpStatusCategory.Redirection_3xx;
        case HttpStatusCode.BadRequest_400:
        case HttpStatusCode.Unauthorized_401:
        case HttpStatusCode.PaymentRequired_402:
        case HttpStatusCode.Forbidden_403:
        case HttpStatusCode.NotFound_404:
        case HttpStatusCode.MethodNotAllowed_405:
        case HttpStatusCode.NotAcceptable_406:
        case HttpStatusCode.ProxyAuthenticationRequired_407:
        case HttpStatusCode.RequestTimeout_408:
        case HttpStatusCode.Conflict_409:
        case HttpStatusCode.Gone_410:
        case HttpStatusCode.LengthRequired_411:
        case HttpStatusCode.PreconditionFailed_412:
        case HttpStatusCode.RequestEntityTooLarge_413:
        case HttpStatusCode.RequestURITooLong_414:
        case HttpStatusCode.UnsupportedMediaType_415:
        case HttpStatusCode.RequestedRangeNotSatisfiable_416:
        case HttpStatusCode.ExpectationFailed_417:
        case HttpStatusCode.ImATeapot_418:
        case HttpStatusCode.MisdirectedRequest_421:
        case HttpStatusCode.UnprocessableEntity_422:
        case HttpStatusCode.Locked_423:
        case HttpStatusCode.FailedDependency_424:
        case HttpStatusCode.TooEarly_425:
        case HttpStatusCode.UpgradeRequired_426:
        case HttpStatusCode.PreconditionRequired_428:
        case HttpStatusCode.TooManyRequests_429:
        case HttpStatusCode.RequestHeaderFieldsTooLarge_431:
        case HttpStatusCode.UnavailableForLegalReasons_451:
            return HttpStatusCategory.ClientError_4xx;
        case HttpStatusCode.InternalServerError_500:
        case HttpStatusCode.NotImplemented_501:
        case HttpStatusCode.BadGateway_502:
        case HttpStatusCode.ServiceUnavailable_503:
        case HttpStatusCode.GatewayTimeout_504:
        case HttpStatusCode.HTTPVersionNotSupported_505:
        case HttpStatusCode.VariantAlsoNegotiates_506:
        case HttpStatusCode.InsufficientStorage_507:
        case HttpStatusCode.LoopDetected_508:
        case HttpStatusCode.NetworkAuthenticationRequired_511:
            return HttpStatusCategory.ServerError_5xx;
    }
}

/**
 * Returns the message of the HTTP status code, e.g. "OK" for 200.
 *
 * @param code The HTTP status code
 * @returns The status message matching the HTTP status code
 */
export function httpStatusMesssage(code: HttpStatusCode): string {
    switch (code) {
        case HttpStatusCode.Continue_100:
            return HttpStatusMessage.Continue_100;
        case HttpStatusCode.SwitchingProtocols_101:
            return HttpStatusMessage.SwitchingProtocols_101;
        case HttpStatusCode.Processing_102:
            return HttpStatusMessage.Processing_102;
        case HttpStatusCode.EarlyHints_103:
            return HttpStatusMessage.EarlyHints_103;
        case HttpStatusCode.Ok_200:
            return HttpStatusMessage.Ok_200;
        case HttpStatusCode.Created_201:
            return HttpStatusMessage.Created_201;
        case HttpStatusCode.Accepted_202:
            return HttpStatusMessage.Accepted_202;
        case HttpStatusCode.NonAuthoritativeInformation_203:
            return HttpStatusMessage.NonAuthoritativeInformation_203;
        case HttpStatusCode.NoContent_204:
            return HttpStatusMessage.NoContent_204;
        case HttpStatusCode.ResetContent_205:
            return HttpStatusMessage.ResetContent_205;
        case HttpStatusCode.PartialContent_206:
            return HttpStatusMessage.PartialContent_206;
        case HttpStatusCode.MultiStatus_207:
            return HttpStatusMessage.MultiStatus_207;
        case HttpStatusCode.AlreadyReported_208:
            return HttpStatusMessage.AlreadyReported_208;
        case HttpStatusCode.IMUsed_226:
            return HttpStatusMessage.IMUsed_226;
        case HttpStatusCode.MultipleChoices_300:
            return HttpStatusMessage.MultipleChoices_300;
        case HttpStatusCode.MovedPermanently_301:
            return HttpStatusMessage.MovedPermanently_301;
        case HttpStatusCode.MovedTemporarily_302:
            return HttpStatusMessage.MovedTemporarily_302;
        case HttpStatusCode.SeeOther_303:
            return HttpStatusMessage.SeeOther_303;
        case HttpStatusCode.NotModified_304:
            return HttpStatusMessage.NotModified_304;
        case HttpStatusCode.UseProxy_305:
            return HttpStatusMessage.UseProxy_305;
        case HttpStatusCode.TemporaryRedirect_307:
            return HttpStatusMessage.TemporaryRedirect_307;
        case HttpStatusCode.PermanentRedirect_308:
            return HttpStatusMessage.PermanentRedirect_308;
        case HttpStatusCode.BadRequest_400:
            return HttpStatusMessage.BadRequest_400;
        case HttpStatusCode.Unauthorized_401:
            return HttpStatusMessage.Unauthorized_401;
        case HttpStatusCode.PaymentRequired_402:
            return HttpStatusMessage.PaymentRequired_402;
        case HttpStatusCode.Forbidden_403:
            return HttpStatusMessage.Forbidden_403;
        case HttpStatusCode.NotFound_404:
            return HttpStatusMessage.NotFound_404;
        case HttpStatusCode.MethodNotAllowed_405:
            return HttpStatusMessage.MethodNotAllowed_405;
        case HttpStatusCode.NotAcceptable_406:
            return HttpStatusMessage.NotAcceptable_406;
        case HttpStatusCode.ProxyAuthenticationRequired_407:
            return HttpStatusMessage.ProxyAuthenticationRequired_407;
        case HttpStatusCode.RequestTimeout_408:
            return HttpStatusMessage.RequestTimeout_408;
        case HttpStatusCode.Conflict_409:
            return HttpStatusMessage.Conflict_409;
        case HttpStatusCode.Gone_410:
            return HttpStatusMessage.Gone_410;
        case HttpStatusCode.LengthRequired_411:
            return HttpStatusMessage.LengthRequired_411;
        case HttpStatusCode.PreconditionFailed_412:
            return HttpStatusMessage.PreconditionFailed_412;
        case HttpStatusCode.RequestEntityTooLarge_413:
            return HttpStatusMessage.RequestEntityTooLarge_413;
        case HttpStatusCode.RequestURITooLong_414:
            return HttpStatusMessage.RequestURITooLong_414;
        case HttpStatusCode.UnsupportedMediaType_415:
            return HttpStatusMessage.UnsupportedMediaType_415;
        case HttpStatusCode.RequestedRangeNotSatisfiable_416:
            return HttpStatusMessage.RequestedRangeNotSatisfiable_416;
        case HttpStatusCode.ExpectationFailed_417:
            return HttpStatusMessage.ExpectationFailed_417;
        case HttpStatusCode.ImATeapot_418:
            return HttpStatusMessage.ImATeapot_418;
        case HttpStatusCode.MisdirectedRequest_421:
            return HttpStatusMessage.MisdirectedRequest_421;
        case HttpStatusCode.UnprocessableEntity_422:
            return HttpStatusMessage.UnprocessableEntity_422;
        case HttpStatusCode.Locked_423:
            return HttpStatusMessage.Locked_423;
        case HttpStatusCode.FailedDependency_424:
            return HttpStatusMessage.FailedDependency_424;
        case HttpStatusCode.TooEarly_425:
            return HttpStatusMessage.TooEarly_425;
        case HttpStatusCode.UpgradeRequired_426:
            return HttpStatusMessage.UpgradeRequired_426;
        case HttpStatusCode.PreconditionRequired_428:
            return HttpStatusMessage.PreconditionRequired_428;
        case HttpStatusCode.TooManyRequests_429:
            return HttpStatusMessage.TooManyRequests_429;
        case HttpStatusCode.RequestHeaderFieldsTooLarge_431:
            return HttpStatusMessage.RequestHeaderFieldsTooLarge_431;
        case HttpStatusCode.UnavailableForLegalReasons_451:
            return HttpStatusMessage.UnavailableForLegalReasons_451;
        case HttpStatusCode.InternalServerError_500:
            return HttpStatusMessage.InternalServerError_500;
        case HttpStatusCode.NotImplemented_501:
            return HttpStatusMessage.NotImplemented_501;
        case HttpStatusCode.BadGateway_502:
            return HttpStatusMessage.BadGateway_502;
        case HttpStatusCode.ServiceUnavailable_503:
            return HttpStatusMessage.ServiceUnavailable_503;
        case HttpStatusCode.GatewayTimeout_504:
            return HttpStatusMessage.GatewayTimeout_504;
        case HttpStatusCode.HTTPVersionNotSupported_505:
            return HttpStatusMessage.HTTPVersionNotSupported_505;
        case HttpStatusCode.VariantAlsoNegotiates_506:
            return HttpStatusMessage.VariantAlsoNegotiates_506;
        case HttpStatusCode.InsufficientStorage_507:
            return HttpStatusMessage.InsufficientStorage_507;
        case HttpStatusCode.LoopDetected_508:
            return HttpStatusMessage.LoopDetected_508;
        case HttpStatusCode.NetworkAuthenticationRequired_511:
            return HttpStatusMessage.NetworkAuthenticationRequired_511;
    }
}

/**
 * Returns the status code of a HTTP status message, e.g. 200 for "OK".
 *
 * @param message The HTTP status message
 * @returns The status code matching the HTTP status message
 */
export function httpStatusCode(message: HttpStatusMessage): HttpStatusCode {
    switch (message) {
        case HttpStatusMessage.Continue_100:
            return HttpStatusCode.Continue_100;
        case HttpStatusMessage.SwitchingProtocols_101:
            return HttpStatusCode.SwitchingProtocols_101;
        case HttpStatusMessage.Processing_102:
            return HttpStatusCode.Processing_102;
        case HttpStatusMessage.EarlyHints_103:
            return HttpStatusCode.EarlyHints_103;
        case HttpStatusMessage.Ok_200:
            return HttpStatusCode.Ok_200;
        case HttpStatusMessage.Created_201:
            return HttpStatusCode.Created_201;
        case HttpStatusMessage.Accepted_202:
            return HttpStatusCode.Accepted_202;
        case HttpStatusMessage.NonAuthoritativeInformation_203:
            return HttpStatusCode.NonAuthoritativeInformation_203;
        case HttpStatusMessage.NoContent_204:
            return HttpStatusCode.NoContent_204;
        case HttpStatusMessage.ResetContent_205:
            return HttpStatusCode.ResetContent_205;
        case HttpStatusMessage.PartialContent_206:
            return HttpStatusCode.PartialContent_206;
        case HttpStatusMessage.MultiStatus_207:
            return HttpStatusCode.MultiStatus_207;
        case HttpStatusMessage.AlreadyReported_208:
            return HttpStatusCode.AlreadyReported_208;
        case HttpStatusMessage.IMUsed_226:
            return HttpStatusCode.IMUsed_226;
        case HttpStatusMessage.MultipleChoices_300:
            return HttpStatusCode.MultipleChoices_300;
        case HttpStatusMessage.MovedPermanently_301:
            return HttpStatusCode.MovedPermanently_301;
        case HttpStatusMessage.MovedTemporarily_302:
            return HttpStatusCode.MovedTemporarily_302;
        case HttpStatusMessage.SeeOther_303:
            return HttpStatusCode.SeeOther_303;
        case HttpStatusMessage.NotModified_304:
            return HttpStatusCode.NotModified_304;
        case HttpStatusMessage.UseProxy_305:
            return HttpStatusCode.UseProxy_305;
        case HttpStatusMessage.TemporaryRedirect_307:
            return HttpStatusCode.TemporaryRedirect_307;
        case HttpStatusMessage.PermanentRedirect_308:
            return HttpStatusCode.PermanentRedirect_308;
        case HttpStatusMessage.BadRequest_400:
            return HttpStatusCode.BadRequest_400;
        case HttpStatusMessage.Unauthorized_401:
            return HttpStatusCode.Unauthorized_401;
        case HttpStatusMessage.PaymentRequired_402:
            return HttpStatusCode.PaymentRequired_402;
        case HttpStatusMessage.Forbidden_403:
            return HttpStatusCode.Forbidden_403;
        case HttpStatusMessage.NotFound_404:
            return HttpStatusCode.NotFound_404;
        case HttpStatusMessage.MethodNotAllowed_405:
            return HttpStatusCode.MethodNotAllowed_405;
        case HttpStatusMessage.NotAcceptable_406:
            return HttpStatusCode.NotAcceptable_406;
        case HttpStatusMessage.ProxyAuthenticationRequired_407:
            return HttpStatusCode.ProxyAuthenticationRequired_407;
        case HttpStatusMessage.RequestTimeout_408:
            return HttpStatusCode.RequestTimeout_408;
        case HttpStatusMessage.Conflict_409:
            return HttpStatusCode.Conflict_409;
        case HttpStatusMessage.Gone_410:
            return HttpStatusCode.Gone_410;
        case HttpStatusMessage.LengthRequired_411:
            return HttpStatusCode.LengthRequired_411;
        case HttpStatusMessage.PreconditionFailed_412:
            return HttpStatusCode.PreconditionFailed_412;
        case HttpStatusMessage.RequestEntityTooLarge_413:
            return HttpStatusCode.RequestEntityTooLarge_413;
        case HttpStatusMessage.RequestURITooLong_414:
            return HttpStatusCode.RequestURITooLong_414;
        case HttpStatusMessage.UnsupportedMediaType_415:
            return HttpStatusCode.UnsupportedMediaType_415;
        case HttpStatusMessage.RequestedRangeNotSatisfiable_416:
            return HttpStatusCode.RequestedRangeNotSatisfiable_416;
        case HttpStatusMessage.ExpectationFailed_417:
            return HttpStatusCode.ExpectationFailed_417;
        case HttpStatusMessage.ImATeapot_418:
            return HttpStatusCode.ImATeapot_418;
        case HttpStatusMessage.MisdirectedRequest_421:
            return HttpStatusCode.MisdirectedRequest_421;
        case HttpStatusMessage.UnprocessableEntity_422:
            return HttpStatusCode.UnprocessableEntity_422;
        case HttpStatusMessage.Locked_423:
            return HttpStatusCode.Locked_423;
        case HttpStatusMessage.FailedDependency_424:
            return HttpStatusCode.FailedDependency_424;
        case HttpStatusMessage.TooEarly_425:
            return HttpStatusCode.TooEarly_425;
        case HttpStatusMessage.UpgradeRequired_426:
            return HttpStatusCode.UpgradeRequired_426;
        case HttpStatusMessage.PreconditionRequired_428:
            return HttpStatusCode.PreconditionRequired_428;
        case HttpStatusMessage.TooManyRequests_429:
            return HttpStatusCode.TooManyRequests_429;
        case HttpStatusMessage.RequestHeaderFieldsTooLarge_431:
            return HttpStatusCode.RequestHeaderFieldsTooLarge_431;
        case HttpStatusMessage.UnavailableForLegalReasons_451:
            return HttpStatusCode.UnavailableForLegalReasons_451;
        case HttpStatusMessage.InternalServerError_500:
            return HttpStatusCode.InternalServerError_500;
        case HttpStatusMessage.NotImplemented_501:
            return HttpStatusCode.NotImplemented_501;
        case HttpStatusMessage.BadGateway_502:
            return HttpStatusCode.BadGateway_502;
        case HttpStatusMessage.ServiceUnavailable_503:
            return HttpStatusCode.ServiceUnavailable_503;
        case HttpStatusMessage.GatewayTimeout_504:
            return HttpStatusCode.GatewayTimeout_504;
        case HttpStatusMessage.HTTPVersionNotSupported_505:
            return HttpStatusCode.HTTPVersionNotSupported_505;
        case HttpStatusMessage.VariantAlsoNegotiates_506:
            return HttpStatusCode.VariantAlsoNegotiates_506;
        case HttpStatusMessage.InsufficientStorage_507:
            return HttpStatusCode.InsufficientStorage_507;
        case HttpStatusMessage.LoopDetected_508:
            return HttpStatusCode.LoopDetected_508;
        case HttpStatusMessage.NetworkAuthenticationRequired_511:
            return HttpStatusCode.NetworkAuthenticationRequired_511;
    }
}
