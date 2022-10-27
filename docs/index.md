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

### Efficacy

### Weight Change Potential

### Hypoglycemia Risk

### Cardiovascular Effect

### Cost

### Renal Effect

## Diagnostic Factor
> A circumstance influencing the dianosis of a disease.

Diagnostic Factors included within the ontology are based on diabetes related NetCE case studies. Subclasses of **dpo:DiagnosticFactor** include **dpo:Symptom**, **dpo:Hyperlipidemia**, **dpo:Hypertension**, **dpo:FetalMacrosomia**, **dpo:Disease**, **dpo:Behavior**, **dpo:Occupation**, and **dpo:History**.

### Symptom
> A symptom is a perceived change in function, sensation, loss, disturbance or appearance reported by a patient indicative of a disease. [ url:https://link.springer.com/chapter/10.1007/978-1-4615-4789-1_5 url:https://www.nature.com/subjects/signs-and-symptoms url:https://www.merriam-webster.com/dictionary/symptom ][Definition Source: SYMP:0000462]

### Disease

### Behavior and Occupation

### History

## Therapy
> An action or administration of therapeutic agents to produce an effect that is intended to alter or stop a pathologic process. [Definition Source: NCI]

**dpo:Therapy** contains the subclass **dpo:AntihyperglycemicTreatment** which in turn contains the subclasses **dpo:Biguanide**, **dpo:SGLT2Inhibitor**, **dpo:GLP1RA**, **dpo:DPP4Inhibitor**, **dpo:Thiazolidinedione**, and **dpo:Sulfonylurea**.

The therapies included within this ontology are based on the therapies included in Table 9.2 of the ADA guidelines.

### Biguanide
> Any antidiabetic agent with the biguanide base structure or phenformin derivatives with antihyperglycemic activity. Biguanide antidiabetic agents activate AMP-activated protein kinase (AMPK) resulting in decreased glucose production in the liver, increased peripheral glucose uptake and improved utilization of glucose. Biguanide-based antidiabetic agents do not cause hypoglycemia. In addition, biguanide antidiabetics decrease absorption of glucose from the gastrointestinal tract. [Definition Source: NCI]

#### Metformin
> An agent belonging to the biguanide class of antidiabetics with antihyperglycemic activity. Metformin is associated with a very low incidence of lactic acidosis. This agent helps reduce LDL cholesterol and triglyceride levels, and is not associated with weight gain, and prevents the cardiovascular complications of diabetes. Metformin is not metabolized and is excreted unchanged by the kidneys. [Definition Source: NCI]

```
dpo:Metformin rdfs:subClassOf dpo:Biguanide ;
    owl:equivalentClass omit:0009750 , chebi:6801 , loinc:55548-2, ncit:C61612 ;
    rdfs:label "Metformin"^^xsd:string ;
    rdfs:subClassOf
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:HighEfficacy ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralWeightChange ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NoKnownHypoglycemiaRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:PotentialASCVDBenefit ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralHeartFailureRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:LowCost ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralDKDRisk ] ] .
```

### SGLT2 Inhibitor
> Any inhibitor of the sodium-glucose co-transporter subtype 2 (SGLT2) with antihyperglycemic activity. By binding to and blocking SGLT2, these inhibitors suppress reabsorption of glucose in the proximal tubule within the kidneys and thereby enhancing urinary excretion of glucose. This eventually normalizes blood glucose levels. SGLT2, a transport system exclusively expressed in the proximal renal tubules, mediates about 90% of renal glucose reabsorption from tubular fluid. [Definition Source: NCI]

```
dpo:SGLT2Inhibitor rdfs:subClassOf dpo:AntihyperglycemicTreatment ;
    owl:equivalentClass chebi:73273, ncit:C98083 ;
    rdfs:label "SGLT2 Inhibitor"^^xsd:string ;
    rdfs:subClassOf
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:IntermediateEfficacy ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:WeightLossPotential ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NoKnownHypoglycemiaRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:HighCost ] ] .
```

### GLP1 RA
> Any of the analogues of the endogenous gastrointestinal hormone glucagon-like peptide-1 (GLP-1) with antihyperglycemic activity. GLP-1 mimetics mimic the activity of GLP-1 and thereby stimulate glucose-dependent secretion of insulin from pancreatic beta cells, suppress glucagon secretion from alpha cells, increase insulin sensitivity and inhibit gastric emptying thereby slowing absorption of nutrients and creating a satiating effect. Altogether, this lowers blood glucose levels. GLP-1 is rapidly inactivated by the enzyme dipeptidyl peptidase-4 (DPP-4). [Definition Source: NCI]
> An agonist that binds to and activates glucagon-like peptide-1 (GLP-1) receptors. [Definition Source: CHEBI]

```
dpo:GLP1RA rdfs:subClassOf dpo:AntihyperglycemicTreatment ;
    owl:equivalentClass chebi:71196 , ncit:C98085 ;
    rdfs:label "GLP-1 RA" ;
    skos:definition ""^^xsd:string ;
    rdfs:subClassOf
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:HighEfficacy ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:WeightLossPotential ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NoKnownHypoglycemiaRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralHeartFailureRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:HighCost ] ] .
```

### DPP4 Inhibitor
> Any inhibitor of the proline-specific serine protease dipeptidyl peptidase 4 (DPP-4), with hypoglycemic activity. DPP-4 inhibitors bind to DPP-4 and inhibit the breakdown of the incretin hormones glucagon-like peptide-1 (GLP-1) and glucose-dependent insulinotropic polypeptide (GIP). This prolongs incretin activity, increases postprandial insulin release, decreases glucagon release, delays gastric emptying and lowers blood glucose levels. The risk for hypoglycemia is negligible with the use of DPP-4 inhibitors. [Definition Source: NCI]
> An EC 3.4.14.* (dipeptidyl- and tripeptidyl-peptidases) inhibitor that specifically inhibits dipeptidyl peptidase-4 (EC 3.4.14.5). [Definition Source: CHEBI]

```
dpo:DPP4Inhibitor rdfs:subClassOf dpo:AntihyperglycemicTreatment ;
    owl:equivalentClass chebi:68612 , ncit:C98086 ;
    rdfs:label "DPP-4 Inhibitor"^^xsd:string ;
    rdfs:subClassOf
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:IntermediateEfficacy ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralWeightChange ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NoKnownHypoglycemiaRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralASCVDRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:HighCost ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralDKDRisk ] ] .
```

### Thiazolidinedione
> Any antidiabetic agent with the glitazone (thiazolidinedione) base structure with antihyperglycemic activity. Glitazone antidiabetic agents selectively bind to and stimulate the nuclear receptor peroxisome proliferator-activated receptor (PPAR) gamma. This results in the selective transcription of a number of insulin-sensitive genes involved in glucose metabolism. This eventually enhances insulin sensitivity, reduces insulin resistance and decreases hepatic gluconeogenesis. PPARs function as transcription factors that regulate expressions of genes involved in cellular differentiation, development, and metabolism (carbohydrate, lipid, protein), as well as tumorigenesis; PPARgamma is expressed at high levels in adipose tissue. [Definition Source: NCI]

```
dpo:Thiazolidinedione rdfs:subClassOf dpo:AntihyperglycemicTreatment ;
    owl:equivalentClass chebi:50990 , ncit:C98241 ;
    rdfs:label "Thiazolidinedione"^^xsd:string ;
    rdfs:subClassOf
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:HighEfficacy ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:WeightGainPotential ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NoKnownHypoglycemiaRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:IncreasedHeartFailureRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:LowCost ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralDKDRisk ] ] .
```

### Sulfonylurea
> Sulfonamide urea derivatives with antihyperglycemic activity. Sulphonylurea antidiabetic agents bind to sulfonylurea receptor type 1 (SUR1), the subunit of ATP-sensitive inwardly-rectifier potassium (IKATP) channels on the membranes of pancreatic beta cells, thereby blocking the inward current flow (influx) of positively charged K+ ions into the cell. This results in tonic membrane depolarization, and induces a calcium ion influx through voltage-sensitive calcium channels; increased intracellular calcium ion levels trigger exocytosis of insulin-containing granules. This eventually induces secretion of insulin. The IKATP channels found in pancreatic islets are complexes of four IKATP 6.2 and four SUR1 subunits. In addition, some sulfonylureas of larger molecular size may increase the sensitivity of peripheral tissues to insulin mediated through peroxisome proliferator-activated receptor gamma (PPARgamma). [Definition Source: NCI]

```
dpo:Sulfonylurea rdfs:subClassOf dpo:AntihyperglycemicTreatment ;
    owl:equivalentClass chebi:76983 , ncit:C97936 ;
    rdfs:label "Sulfonylurea"^^xsd:string ;
    rdfs:subClassOf
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:HighEfficacy ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:WeightGainPotential ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:KnownHypoglycemiaRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralASCVDRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralHeartFailureRisk ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:LowCost ] ] ,
        [ rdf:type owl:Restriction ;
          owl:onProperty sio:hasAttribute ;
          owl:hasValue [ rdf:type dpo:NeutralDKDRisk ] ] .
```

## Measurement Finding
> A finding surmised from recorded measurements.

The measurement finding branch contains categorizations that can be made based on lab measurements. Subclasses of **dpo:MeasurementFinding** include **dpo:WeightRelatedFinding**, **dpo:BloodGlucoseRelatedFinding**, **dpo:CholesterolRelatedFinding**, and **dpo:TriglycerideRelatedFinding**.

![pto:MeasurementFinding](./assets/images/MeasurementFinding.png)

The measurement finding categorizations included in the ontology are based on measurement values found in the diabetes related NetCE case studies.

### Weight Related Finding


### Blood Glucose Related Finding


### Cholesterol Related Finding


### Triglyceride Related Finding
