const messages = {
  all: {
    METHOD_NOT_IMPLEMENTED: 'METHOD NOT IMPLEMENTED',
  },
  errorHandler: {
    NOT_FOUND: 'NOT FOUND',
    UNAUTHENTICATED: 'UNAUTHENTICATED',
    SERVER_ERROR: 'SERVER ERROR',
    VALIDATION_ERROR: 'VALIDATION ERROR',
    BUSINESS_ERROR: 'BUSINESS ERROR',
    API_ERROR: 'API ERROR',
  },
  successHandler: {
    SUCCESS: 'SUCCESS',
  },
  responseHandler: {
    EXIST_TRANSACTION_OPEN: 'THERE IS OPEN TRANSACTION',
  },
  DbContexto: {
    NOT_TRANSACTION: 'NO TRANSACTION OPEN',
  },
  DbContextoMongo: {
    CONNECTING: 'CONNECTING IN MONGODB',
    DISABLED_CONNECTION: 'CONNECTION MONGODB DISABLED',
    NOT_CONNECTED: 'MONGODB CONNECTION ERROR',
    NOT_HAVE_TRANSACTION: 'MONGODB DOES NOT HAVE TRANSACTION CONTROL',
  },
  DbContextDynamob: {
    CONNECTING: 'CONNECTING IN DYNAMODB',
    DISABLED_CONNECTION: 'CONNECTION DYNAMOBDB DISABLED',
    NOT_CONNECTED: 'DYNAMOBDB CONNECTION ERROR',
    NOT_HAVE_TRANSACTION: 'DYNAMOBDB DOES NOT HAVE TRANSACTION CONTROL',
  },
  RepositoryGeneric: {
    COLUMN_NOT_EXIST: 'COLUMN NOT EXIST',
  },
  Filter: {
    VALUE_IS_NULL: 'FILTER QUERY IS NULL',
    FIELD_HIDDEN_CONTEXT: 'COLUMN HIDDEN NOT FOUND',
    FIELD_NOT_FOUND: 'COLUMN NOT FOUND',
  },
  KAFKA: {
    MESSAGE_SUCCESS: 'MESSAGE SUCCESS BASE',
    MESSAGE_ERROR: 'MESSAGE ERROR BASE',
    MESSAGE_SEND: 'MESSAGE SEND TO KAFKA',
  },
  RabbitMQ: {
    CONNECTION_FAILED: 'ERROR CONNECT RABBITMQ',
    MESSAGE_SUCCESS: 'MESSAGE SUCCESS RABBITMQ',
    MESSAGE_ERROR: 'MESSAGE ERROR RABBITMQ',
    MESSAGE_SEND: 'MESSAGE SEND TO RABBITMQ',
    MESSAGE_CONTENT_JSON_ERRO: 'JSON INVALID',
  },
  SQS: {
    CONNECTION_FAILED: 'ERROR CONNECT SQS',
    MESSAGE_SUCCESS: 'MESSAGE SUCCESS SQS',
    MESSAGE_ERROR: 'MESSAGE ERROR SQS',
    MESSAGE_ERROR_SEND: 'MESSAGE ERROR SEND TO SQS',
    MESSAGE_SEND: 'MESSAGE SEND TO SQS',
    MESSAGE_ERROR_INIT: 'MUST CALL INIT(...) FIRST',
    MESSAGE_ERROR_CREATE_QUEUE: 'ERRO CREATE QUEUE',
    MESSAGE_ERROR_GETURL: 'ERRO AO BUSCAR URL QUEUE',
    MESSAGE_CREATE_QUEUE: 'CREATE QUEUE SUCCESS',
    MESSAGE_LISTENER_QUEUE: 'LISTENER QUEUE SUCCESS',
    MESSAGE_ERROR_FIND_QUEUE: 'UNABLE TO FIND SQS QUEUE',
    MESSAGE_PROCESS: 'PROCESS MESSAGE',
    MESSAGE_JSON_INVALID: 'JSON INVALID',
  },
  BASE_QUEUES: {
    MESSAGE_SUCCESS: 'MESSAGE SUCCESS BASE',
    MESSAGE_ERROR: 'MESSAGE ERROR BASE',
    MESSAGE_SEND: 'MESSAGE SEND TO BASE',
  },
};

export default messages;
