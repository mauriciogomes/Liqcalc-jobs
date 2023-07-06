import { OpportunityContract } from "./opportunity-contract.enum";
import { OpportunityLevel } from "./opportunity-level.enum";
import { OpportunityRegime } from "./opportunity-regime.enum";

export interface Opportunity {
  _id: string,
  index: number,
  title: string,
  level: OpportunityLevel,
  description: string,
  salary: number,
  benefits: string,
  regime: OpportunityRegime,
  contract: OpportunityContract,
  company: string,
  accept_outside?: boolean,
  registered: Date
}

