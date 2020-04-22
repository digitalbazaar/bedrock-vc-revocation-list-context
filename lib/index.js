/*
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const {contexts, constants: contextConstants} =
  require('vc-revocation-list-context');
const {jsonLdDocumentLoader} = require('bedrock-jsonld-document-loader');

for(const c in contextConstants) {
  const contextUrl = contextConstants[c];
  bedrockConstants[c] = contextUrl;
  jsonLdDocumentLoader.addStatic(contextUrl, contexts.get(contextUrl));
}
