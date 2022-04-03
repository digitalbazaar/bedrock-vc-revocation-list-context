/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import vcRevocationListContext from 'vc-revocation-list-context';

const contextModules = [
  vcRevocationListContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}
