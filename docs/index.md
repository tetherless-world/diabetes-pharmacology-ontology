---
layout: default
---

# Overview

The Diabetes Pharmacology Ontology was designed by leveraging the American Diabetes Association 2022 Guidelines Chapter 9 - Pharmacologic Approaches to Glycemic Treatment to represent some common diabetes treatments and several of their characteristics that play a role in therapy planning. Additionally, common symptoms associated with diabetes and lab measurement types were included in the ontology based on NetCE case studies related to diabetes.


# Namespaces

The namespaces used in DPO are listed below.

##### DPO Namespaces

| namespace | URI |
|:-------------|:------------------|
| dpo | [http://purl.org/twc/DPO/ont/](http://purl.org/twc/DPO/ont/) |
| dpo-kb | [http://purl.org/twc/DPO/kb/](http://purl.org/twc/DPO/kb/) |
| owl | [http://www.w3.org/2002/07/owl#](http://www.w3.org/2002/07/owl#) |
| rdf | [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#) |
| rdfs | [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#) |
| xsd | [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#) |
| dct | [http://purl.org/dc/terms/](http://purl.org/dc/terms/) |
| skos | [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#) |
| ncit | [http://purl.obolibrary.org/obo/NCIT_](http://purl.obolibrary.org/obo/NCIT_) |
| loinc | [http://purl.bioontology.org/ontology/LNC/](http://purl.bioontology.org/ontology/LNC/) |
| chebi | [http://purl.obolibrary.org/obo/CHEBI_](http://purl.obolibrary.org/obo/CHEBI_) |
| omit | [http://purl.obolibrary.org/obo/OMIT_](http://purl.obolibrary.org/obo/OMIT_) |
| symp | [http://purl.obolibrary.org/obo/SYMP_](http://purl.obolibrary.org/obo/SYMP_) |
| hp | [http://purl.obolibrary.org/obo/HP_](http://purl.obolibrary.org/obo/HP_) |
| sio | [http://semanticscience.org/resource/](http://semanticscience.org/resource/) |


# Diabetes Pharmacology Ontology

The root branch of DPO is **dpo:Factor**. A factor is defined as follows:
> A factor is a circumstance influencing the treatment or diagnosis of a disease, therapeutic agents that may be administered to produce an effect, or findings resulting from recorded measurements.

Four branches extend from **dpo:Factor**. These are **dpo:PharmacotherapyFactor**, **dpo:DiagnosticFactor**, **dpo:Therapy**, and **dpo:MeasurementFinding**.

![pto:Factor](./assets/images/Factor.png)

## Pharmacotherapy Factor
> A circumstance influencing the treatment of a disease through the use of drugs.

The Pharmacotherapy Factors included in this ontology are based on those included in Chapter 9 of the ADA guidelines. The subclasses of **dpo:PharmacotherapyFactor** include the top level pharmacotherapy factors **dpo:Efficacy**, **dpo:WeightChangePotential**, **dpo:HypoglycemiaRisk**, **dpo:CardiovascularEffect**, **dpo:Cost**, and **dpo:RenalEffect**.

![pto:PharmacotherapyFactor](./assets/images/PharmacotherapyFactor.png)

Potential categorizations of these top level pharmacotherapy factors are encoded as subclasses of each respective pharmacotherapy factor. The recommendation of a therapy may be based on whether or not a patient has an attribute that is of type one of the subclasses of the top level pharmacotherapy factors.

## Diagnostic Factor
> A circumstance influencing the dianosis of a disease.

Diagnostic Factors included within the ontology are based on diabetes related NetCE case studies. Subclasses of **dpo:DiagnosticFactor** include **dpo:Symptom**, **dpo:Hyperlipidemia**, **dpo:Hypertension**, **dpo:FetalMacrosomia**, **dpo:Disease**, **dpo:Behavior**, **dpo:Occupation**, and **dpo:History**.

## Therapy
> An action or administration of therapeutic agents to produce an effect that is intended to alter or stop a pathologic process. [Definition Source: NCI]

**dpo:Therapy** contains the subclass **dpo:AntihyperglycemicTreatment** which in turn contains the subclasses **dpo:Biguanide**, **dpo:SGLT2Inhibitor**, **dpo:GLP1RA**, **dpo:DPP4Inhibitor**, **dpo:Thiazolidinedione**, and **dpo:Sulfonylurea**.

The therapies included within this ontology are based on the therapies included in Table 9.2 of the ADA guidelines.

## Measurement Finding
> A finding surmised from recorded measurements.

The measurement finding branch contains categorizations that can be made based on lab measurements. Subclasses of **dpo:MeasurementFinding** include **dpo:WeightRelatedFinding**, **dpo:BloodGlucoseRelatedFinding**, **dpo:CholesterolRelatedFinding**, and **dpo:TriglycerideRelatedFinding**.

![pto:MeasurementFinding](./assets/images/MeasurementFinding.png)

The measurement finding categorizations included in the ontology were based on measurement values found in the diabetes related NetCE case studies.
