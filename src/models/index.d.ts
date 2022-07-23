import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EditHeadlineInsightMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EditSubHeadlineInsightMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EditHeadlineInsight {
  readonly id: string;
  readonly headlineText?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EditHeadlineInsight, EditHeadlineInsightMetaData>);
  static copyOf(source: EditHeadlineInsight, mutator: (draft: MutableModel<EditHeadlineInsight, EditHeadlineInsightMetaData>) => MutableModel<EditHeadlineInsight, EditHeadlineInsightMetaData> | void): EditHeadlineInsight;
}

export declare class EditSubHeadlineInsight {
  readonly id: string;
  readonly subHeadlineText?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EditSubHeadlineInsight, EditSubHeadlineInsightMetaData>);
  static copyOf(source: EditSubHeadlineInsight, mutator: (draft: MutableModel<EditSubHeadlineInsight, EditSubHeadlineInsightMetaData>) => MutableModel<EditSubHeadlineInsight, EditSubHeadlineInsightMetaData> | void): EditSubHeadlineInsight;
}