/**
 * GraphQL Types definition (aka Schema)
 *
 * To merge the types package merge-graphql-schemas is used.
 *
 * @link https://github.com/okgrow/merge-graphql-schemas
 */
import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './types'));

export default mergeTypes(typesArray, { all: true });
