{
	'http://purl.org/twc/dpo/kb/E': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		
		          | -- G -- | -- S -- |
		| -- B -- | -- T -- |
		          | -- U -- | -- D -- |
		
		'Therapy Rankings': [('Biguanide', 2), ('GLP-1 RA', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 1), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 2), ('GLP-1 RA', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0)],
		
		                    | -- T  -- |
		                    | -- U  -- |
		| -- B -- | -- G -- |
		                    | -- S  -- |
		                    | -- D  -- |
		
		
		Score = 2
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/HighEfficacyDiabetesTherapy': {
				'Biguanide': '+1',
				'GLP-1 RA': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/LowEfficacyDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/H': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		
		          | -- S -- |
		          | -- D -- |
		| -- B -- |         | -- U -- |
		          | -- G -- |
		          | -- T -- |
		
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 1), ('GLP-1 RA', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 1), ('GLP-1 RA', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		
		          | -- S -- |
		          | -- D -- |
		| -- B -- |         | -- U -- |
		          | -- G -- |
		          | -- T -- |
		          
		Score = 0
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/NoKnownHypoglycemiaRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '+1',
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/KnownHypoglycemiaRiskDiabetesTherapy': {
				'Sulfonylurea': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/W': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},

		| -- S -- |         | -- T -- |
		| -- B -- | -- D -- |
		| -- G -- |         | -- U -- |

		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		
		          | -- S -- |         | -- T -- |
		| -- B -- |         | -- D -- |
		          | -- G -- |         | -- U -- |
		
		
		Score = 1
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/WeightLossDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/WeightGainDiabetesTherapy': {
				'Sulfonylurea': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/A': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		
		          | -- S -- | -- D -- |
		| -- B -- | -- T -- |
		          | -- G -- | -- U -- |

		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 1), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0), ('Sulfonylurea', 0)],
		
		          | -- S -- |         | -- D -- |
		| -- B -- |         | -- T -- |
		          | -- G -- |         | -- U -- |
		
		Score = 1 (entire branch can be shifted, or just T and then renormalized)
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialASCVDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/IncreasedASCVDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/F': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		
		
		| -- B -- | -- G -- | -- T -- |
		| -- S -- | -- U -- | -- D -- |
		
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 1), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0)],
		'ADA Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 0), ('Sulfonylurea', 0), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0)],
		
		                    | -- G -- |
		                    | -- U -- |
		| -- B -- | -- S -- |
		                    | -- D -- |
		                    | -- T -- |
		                    
		 Score = 3
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialHeartFailureBenefitDiabetesTherapy': {
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/IncreasedHeartFailureRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/C': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		          | -- U -- | -- S -- |
		| -- B -- |         | -- D -- |
		          | -- T -- | -- G -- |

		'Therapy Rankings': [('Biguanide', 2), ('Sulfonylurea', 1), ('Thiazolidinedione', 1), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0), ('GLP-1 RA', 0)],
		'ADA Rankings': [('Biguanide', 3), ('Sulfonylurea', 2), ('Thiazolidinedione', 1), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0), ('GLP-1 RA', 0)],
		
		                              | -- S -- |
		| -- B -- | -- U -- | -- T -- | -- D -- |
		                              | -- G -- |
		
		Score = 1
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/LowCostDiabetesTherapy': {
				'Biguanide': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/HighCostDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'GLP-1 RA': '-1',
				'SGLT2 Inhibitor': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/D': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		| -- B -- | -- D -- |
		| -- S -- | -- T -- |
		| -- G -- | -- U -- |

		'Therapy Rankings': [('Biguanide', 1), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		
		                              | -- D -- |
		| -- B -- | -- S -- | -- G -- | -- T -- |
		                              | -- U -- |
		Score = 2
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialDKDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/IncreasedDKDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/EH': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		          | -- G -- | -- S -- |
		| -- B -- |         |         | -- U -- |
		          | -- T -- | -- D -- |
		
		'Therapy Rankings': [('Biguanide', 3), ('GLP-1 RA', 2), ('Thiazolidinedione', 2), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 1), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 3), ('GLP-1 RA', 2), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 1) ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		
		          |         | -- S -- |
		| -- B -- | -- G -- | -- T -- | -- U -- |
		          |         | -- D -- |
		
		
		
		          | -- S -- |
		          | -- D -- |
		| -- B -- |         | -- U -- |
		          | -- G -- |
		          | -- T -- |
		
		
		
		Score = 1
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/NoKnownHypoglycemiaRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '+1',
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1',
				'Thiazolidinedione': '+1',
				'Biguanide': '+1'
			},
			'http://purl.org/twc/dpo/ont/HighEfficacyDiabetesTherapy': {
				'Biguanide': '+1',
				'GLP-1 RA': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/KnownHypoglycemiaRiskDiabetesTherapy': {
				'Sulfonylurea': '-1'
			},
			'http://purl.org/twc/dpo/ont/LowEfficacyDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/EW': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		| -- B -- |         | -- D -- |
		          | -- S -- | -- T -- |
		| -- G -- |         | -- U -- |
		
		
		'Therapy Rankings': [('Biguanide', 2), ('GLP-1 RA', 2), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 4), ('GLP-1 RA', 3), ('SGLT2 Inhibitor', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		
		
		                                        | -- T -- |
		| -- B -- | -- G -- | -- S -- | -- D -- |
		                                        | -- U -- |
		                                        
		                                        
		                                        
		                                        
		          | -- S -- |         | -- T -- |
		| -- B -- |         | -- D -- |
		          | -- G -- |         | -- U -- |
		
		Score = 2?
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/WeightLossDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/HighEfficacyDiabetesTherapy': {
				'Biguanide': '+1',
				'GLP-1 RA': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/WeightGainDiabetesTherapy': {
				'Sulfonylurea': '-1',
				'Thiazolidinedione': '-1'
			},
			'http://purl.org/twc/dpo/ont/LowEfficacyDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/EA': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		          | -- G -- | -- S -- |
		| -- B -- |         |         | -- D -- |
		          | -- T -- | -- U -- |
		 
		'Therapy Rankings': [('Biguanide', 3), ('GLP-1 RA', 2), ('Thiazolidinedione', 2), ('SGLT2 Inhibitor', 1), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 3), ('GLP-1 RA', 2), ('SGLT2 Inhibitor', 2),  ('Thiazolidinedione', 1), ('Sulfonylurea', 0), ('DPP-4 Inhibitor', 0)],
		
		          | -- G -- |         | -- D -- |
		| -- B -- |         | -- T -- |
		          | -- S -- |         | -- U -- |
		
		Score = 3
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialASCVDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/HighEfficacyDiabetesTherapy': {
				'Biguanide': '+1',
				'GLP-1 RA': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/LowEfficacyDiabetesTherapy': {},
			'http://purl.org/twc/dpo/ont/IncreasedASCVDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/EF': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		          | -- S -- |
		| -- B -- | -- G -- | -- T -- | -- D -- |
		          | -- U -- |
		                              
		                              
		'Therapy Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('Sulfonylurea', 2), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 1), ('Sulfonylurea', 0), ('Thiazolidinedione', 0), ('DPP-4 Inhibitor', 0), ],
		
		                              | -- U -- |
		| -- B -- | -- S -- | -- G -- | -- D -- |
		                              | -- T -- |
		
		Score = 2? Look at this closer -- shift G U T, then shift U (probably 3 though)
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/HighEfficacyDiabetesTherapy': {
				'Biguanide': '+1',
				'GLP-1 RA': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialHeartFailureBenefitDiabetesTherapy': {
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/LowEfficacyDiabetesTherapy': {},
			'http://purl.org/twc/dpo/ont/IncreasedHeartFailureRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/EC': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		'Therapy Rankings': [('Biguanide', 3), ('Thiazolidinedione', 2), ('Sulfonylurea', 2), ('GLP-1 RA', 1), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 4), ('GLP-1 RA', 3), ('Sulfonylurea', 2), ('Thiazolidinedione', 1), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0)],
		
		
		
		
		
		
		
		'ADA Rankings': [('Biguanide', 4), ('Sulfonylurea', 3), ('Thiazolidinedione', 2), ('GLP-1 RA', 1), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0)],
		
		                                        | -- S -- |
		| -- B -- | -- U -- | -- T -- | -- G -- |
		                                        | -- D -- |
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/LowCostDiabetesTherapy': {
				'Biguanide': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			},
			'http://purl.org/twc/dpo/ont/HighEfficacyDiabetesTherapy': {
				'Biguanide': '+1',
				'GLP-1 RA': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/HighCostDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'GLP-1 RA': '-1',
				'SGLT2 Inhibitor': '-1'
			},
			'http://purl.org/twc/dpo/ont/LowEfficacyDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/ED': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		| -- B -- | -- S -- |
		|         | -- T -- | -- D -- |
		| -- G -- | -- U -- |
		
		'Therapy Rankings': [('Biguanide', 2), ('GLP-1 RA', 2), ('SGLT2 Inhibitor', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0), ('DPP-4 Inhibitor', 0)],
		
		                              | -- D -- |
		| -- B -- | -- S -- | -- G -- | -- T -- |
		                              | -- U -- |
		
		
		
		
		
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialDKDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/HighEfficacyDiabetesTherapy': {
				'Biguanide': '+1',
				'GLP-1 RA': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/IncreasedDKDRiskDiabetesTherapy': {},
			'http://purl.org/twc/dpo/ont/LowEfficacyDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/HW': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		'Therapy Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 3), ('DPP-4 Inhibitor', 2), ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		
		
		
		HW
		
		          | -- S -- |
		          | -- D -- |
		| -- B -- |         | -- U -- |
		          | -- G -- |
		          | -- T -- |
		
		WH
		
		
		          | -- S -- |         | -- T -- |
		| -- B -- |         | -- D -- |
		          | -- G -- |         | -- U -- |
		
		
		
		
		
		
		'Preferences': {
		
			'http://purl.org/twc/dpo/ont/NoKnownHypoglycemiaRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '+1',
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1'
			},
			'http://purl.org/twc/dpo/ont/WeightLossDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/KnownHypoglycemiaRiskDiabetesTherapy': {
				'Sulfonylurea': '-1'
			},
			'http://purl.org/twc/dpo/ont/WeightGainDiabetesTherapy': {
				'Sulfonylurea': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/HA': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		
		
		          | -- S -- |         |
		| -- B -- | -- T -- | -- D -- | -- U -- |
		          | -- G -- |         |
		
		
		'Therapy Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('Thiazolidinedione', 2), ('DPP-4 Inhibitor', 1), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 4), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 3), ('Thiazolidinedione', 2), ('DPP-4 Inhibitor', 1), ('Sulfonylurea', 0)],
		
		
		
		          | -- S -- |         |
		| -- B -- |         | -- T -- | -- D -- | -- U -- |
		          | -- G -- |         |
		
		Score = 1
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/NoKnownHypoglycemiaRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '+1',
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialASCVDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/KnownHypoglycemiaRiskDiabetesTherapy': {
				'Sulfonylurea': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedASCVDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/HF': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		| -- B -- |         | -- D -- |
		|         | -- G -- |         | -- U -- |
		| -- S -- |         | -- T -- |
		
		
		'Therapy Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 1),  ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		
		                    | -- D -- |
		| -- B -- | -- S -- | -- G -- | -- U -- |
		                    | -- T -- |
		
		Score = 1?
	
		
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/NoKnownHypoglycemiaRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '+1',
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialHeartFailureBenefitDiabetesTherapy': {
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/KnownHypoglycemiaRiskDiabetesTherapy': {
				'Sulfonylurea': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedHeartFailureRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/HC': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		'Therapy Rankings': [('Biguanide', 2), ('Thiazolidinedione', 1), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0), ('GLP-1 RA', 0), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 2), ('Thiazolidinedione', 1), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 1), ('GLP-1 RA', 1), ('Sulfonylurea', 0)],
		
		
		
		
		
		
		                              | -- S -- |
		| -- B -- | -- U -- | -- T -- | -- D -- |
		                              | -- G -- |
		                              
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/NoKnownHypoglycemiaRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '+1',
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1',
				'Thiazolidinedione': '+1',
				'Biguanide': '+1'
			},
			'http://purl.org/twc/dpo/ont/LowCostDiabetesTherapy': {
				'Biguanide': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/KnownHypoglycemiaRiskDiabetesTherapy': {
				'Sulfonylurea': '-1'
			},
			'http://purl.org/twc/dpo/ont/HighCostDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'GLP-1 RA': '-1',
				'SGLT2 Inhibitor': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/HD': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		| -- B -- | -- D -- |
		| -- S -- |         | -- U -- |
		| -- G -- | -- T -- |
		
		
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 4), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		
		                              | -- D -- |
		| -- B -- | -- S -- | -- G -- |         | -- U -- |
		                              | -- T -- |
		
		
		Score = 2?
		
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/NoKnownHypoglycemiaRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '+1',
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialDKDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/KnownHypoglycemiaRiskDiabetesTherapy': {
				'Sulfonylurea': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedDKDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/WA': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		| -- B -- | -- T -- |
		| -- S -- |         | -- U -- |
		| -- G -- | -- D -- |
		          
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 4), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 3), ('Thiazolidinedione', 2), ('DPP-4 Inhibitor', 1), ('Sulfonylurea', 0)],
		
		
		          | -- S -- |         |
		| -- B -- |         | -- T -- | -- D -- | -- U -- |
		          | -- G -- |         |
		
		Score = 2
		'Preferences': {
			'http://purl.org/twc/dpo/ont/WeightLossDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialASCVDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/WeightGainDiabetesTherapy': {
				'Sulfonylurea': '-1',
				'Thiazolidinedione': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedASCVDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/WF': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		          | -- B -- | -- D -- |
		| -- S -- |                   | -- T -- |
                  | -- G -- | -- U -- |

		'Therapy Rankings': [('SGLT2 Inhibitor', 3), ('Biguanide', 2), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Sulfonylurea', 1), ('Thiazolidinedione', 0)],
		'ADA Rankings': [('Biguanide', 4), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		
		                                        | -- T -- |
		| -- B -- | -- S -- | -- G -- | -- D -- |
                    		                    | -- U -- |
		
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/WeightLossDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialHeartFailureBenefitDiabetesTherapy': {
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/WeightGainDiabetesTherapy': {
				'Sulfonylurea': '-1',
				'Thiazolidinedione': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedHeartFailureRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/WC': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 4), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 3), ('DPP-4 Inhibitor', 2), ('Sulfonylurea', 1),('Thiazolidinedione', 0)],
		
		
		
		
		
		
		                              | -- S -- |
		| -- B -- | -- U -- | -- T -- |         | -- D -- |
		                              | -- G -- |
		                              
		                              
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/WeightLossDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/LowCostDiabetesTherapy': {
				'Biguanide': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/HighCostDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'GLP-1 RA': '-1',
				'SGLT2 Inhibitor': '-1'
			},
			'http://purl.org/twc/dpo/ont/WeightGainDiabetesTherapy': {
				'Sulfonylurea': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/WD': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		| -- S -- |                   | -- T -- |
		          | -- B -- | -- D -- |
		| -- G -- |                   | -- U -- |
		                                        
		'Therapy Rankings': [('SGLT2 Inhibitor', 3), ('GLP-1 RA', 3), ('Biguanide', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 4), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
		
		                                        | -- T -- |
		| -- B -- | -- S -- | -- G -- | -- D -- |
		                                        | -- U -- |
		
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/WeightLossDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialDKDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/IncreasedDKDRiskDiabetesTherapy': {},
			'http://purl.org/twc/dpo/ont/WeightGainDiabetesTherapy': {
				'Sulfonylurea': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/AF': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		| -- B -- |         | -- T -- |
		          | -- G -- |         | -- D -- |
		| -- S -- |         | -- U -- |
		
		'Therapy Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 2), ('Thiazolidinedione', 1), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0), ('Sulfonylurea', 0)],
		
		          | -- S -- |         | -- D -- |
		| -- B -- |         | -- T -- |
		          | -- G -- |         | -- U -- |
		          
		          
		          
		          
		          
		          
		          
		          
		       4        3       2           1       0
		                                        | -- D -- |
		| -- B -- | -- S -- | -- G -- | -- T -- |
		                                        | -- U -- |
		
		Score = 2
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialASCVDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialHeartFailureBenefitDiabetesTherapy': {
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/IncreasedHeartFailureRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'Thiazolidinedione': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedASCVDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/AC': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		                              | -- S -- |
		| -- B -- | -- T -- | -- U -- |         | -- D -- |
		                              | -- G -- |
		
		'Therapy Rankings': [('Biguanide', 4), ('Thiazolidinedione', 3), ('Sulfonylurea', 2), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 4), ('SGLT2 Inhibitor', 3), ('GLP-1 RA', 3), ('Thiazolidinedione', 2), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0)],
		          | -- S -- |
		| -- B -- |         | -- T -- | -- U -- | -- D -- |
		          | -- G -- |
		
		Score = 7?????
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialASCVDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/LowCostDiabetesTherapy': {
				'Biguanide': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/HighCostDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'GLP-1 RA': '-1',
				'SGLT2 Inhibitor': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedASCVDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/AD': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		    
		
		| -- B -- |         | -- D -- |
		| -- S -- | -- T -- |
		| -- G -- |         | -- U -- | 
		
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0), ('Sulfonylurea', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0), ('Sulfonylurea', 0)],
		
		          | -- S -- |         | -- D -- |
		| -- B -- |         | -- T -- |
		          | -- G -- |         | -- U -- |
		
		Score = 1
		
		
		
		
		
		
		DA
		                                        | -- D -- |
		| -- B -- | -- S -- | -- G -- | -- T -- |
		                                        | -- U -- |
		                              		
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialASCVDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'Biguanide': '+1',
				'Thiazolidinedione': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialDKDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/IncreasedDKDRiskDiabetesTherapy': {},
			'http://purl.org/twc/dpo/ont/IncreasedASCVDRiskDiabetesTherapy': {}
		}
	},
	'http://purl.org/twc/dpo/kb/FC': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		                    | -- S -- |
		| -- B -- | -- U -- |         | -- G -- | -- D -- |
		                    | -- T -- |
		'Therapy Rankings': [('Biguanide', 4), ('Sulfonylurea', 3), ('SGLT2 Inhibitor', 2), ('Thiazolidinedione', 2), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 4), ('SGLT2 Inhibitor', 3), ('Sulfonylurea', 2), ('Thiazolidinedione', 1), ('GLP-1 RA', 0), ('DPP-4 Inhibitor', 0)],
		
		                                        | -- G -- |
		| -- B -- | -- S -- | -- U -- | -- T -- |
		                                        | -- D -- |
		'Preferences': {
			'http://purl.org/twc/dpo/ont/LowCostDiabetesTherapy': {
				'Biguanide': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialHeartFailureBenefitDiabetesTherapy': {
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/HighCostDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'GLP-1 RA': '-1',
				'SGLT2 Inhibitor': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedHeartFailureRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/FD': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		          | -- B -- |         | -- D -- |
		| -- S -- |         | -- U -- |
		          | -- G -- |         | -- T -- |
		
		
		'Therapy Rankings': [('SGLT2 Inhibitor', 3), ('Biguanide', 2), ('GLP-1 RA', 2), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0)],
		'ADA Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 1), ('Sulfonylurea', 0), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0)],
		
		
		                              | -- U -- |
		| -- B -- | -- S -- | -- G -- | -- D -- |
		                              | -- T -- |
		                              
		                              
		                              
		F
		
		                    | -- G -- |
		                    | -- U -- |
		| -- B -- | -- S -- |
		                    | -- D -- |
		                    | -- T -- |
		                    
		D
		
		
		                              | -- D -- |
		| -- B -- | -- S -- | -- G -- | -- T -- |
		                              | -- U -- |
		                              
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialDKDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/PotentialHeartFailureBenefitDiabetesTherapy': {
				'SGLT2 Inhibitor': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/IncreasedDKDRiskDiabetesTherapy': {},
			'http://purl.org/twc/dpo/ont/IncreasedHeartFailureRiskDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'Thiazolidinedione': '-1'
			}
		}
	},
	'http://purl.org/twc/dpo/kb/CD': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		
		          | -- T -- | -- S -- |
		| -- B -- |                   |  -- D -- |
                  | -- U -- | -- G -- |

		'Therapy Rankings': [('Biguanide', 3), ('Thiazolidinedione', 2), ('Sulfonylurea', 2), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 0)],
		'ADA Rankings': [('Biguanide', 5), ('SGLT2 Inhibitor', 4), ('GLP-1 RA', 3), ('Sulfonylurea', 2), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0)],
		
		| -- B -- | -- S -- | -- G -- | -- U -- | -- T -- | -- D -- |
		
		
		
		
		'Preferences': {
			'http://purl.org/twc/dpo/ont/PotentialDKDBenefitDiabetesTherapy': {
				'GLP-1 RA': '+1',
				'SGLT2 Inhibitor': '+1'
			},
			'http://purl.org/twc/dpo/ont/LowCostDiabetesTherapy': {
				'Biguanide': '+1',
				'Sulfonylurea': '+1',
				'Thiazolidinedione': '+1'
			}
		},
		'Disinclinations': {
			'http://purl.org/twc/dpo/ont/HighCostDiabetesTherapy': {
				'DPP-4 Inhibitor': '-1',
				'GLP-1 RA': '-1',
				'SGLT2 Inhibitor': '-1'
			},
			'http://purl.org/twc/dpo/ont/IncreasedDKDRiskDiabetesTherapy': {}
		}
	}
}
