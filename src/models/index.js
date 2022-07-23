// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EditHeadlineInsight, EditSubHeadlineInsight } = initSchema(schema);

export {
  EditHeadlineInsight,
  EditSubHeadlineInsight
};