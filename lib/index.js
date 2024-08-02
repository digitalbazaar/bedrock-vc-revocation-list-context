/*!
 * Copyright (c) 2020-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as vcRevocationListContext from 'vc-revocation-list-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({
  documents: vcRevocationListContext.contexts
});

export const {constants} = vcRevocationListContext;
