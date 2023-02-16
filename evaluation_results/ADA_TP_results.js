{
	'http://purl.org/twc/dpo/kb/E': {
		'First Line Therapy': {
			'Biguanide': '+1'
		},
		'Therapy Rankings': [('Biguanide', 2), ('GLP-1 RA', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 1), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0)],
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
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 1), ('GLP-1 RA', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', -1)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 1), ('Biguanide', 1), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', -1), ('Sulfonylurea', -1)],
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
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 1), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0), ('Sulfonylurea', 0)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 1), ('Biguanide', 1), ('GLP-1 RA', 0), ('Sulfonylurea', 0), ('DPP-4 Inhibitor', -1), ('Thiazolidinedione', -1)],
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
		'Therapy Rankings': [('Biguanide', 2), ('Thiazolidinedione', 1), ('Sulfonylurea', 1), ('SGLT2 Inhibitor', -1), ('DPP-4 Inhibitor', -1), ('GLP-1 RA', -1)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 1), ('Biguanide', 1), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
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
		'Therapy Rankings': [('Biguanide', 3), ('GLP-1 RA', 2), ('Thiazolidinedione', 2), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 1), ('Sulfonylurea', 0)],
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
		'Therapy Rankings': [('Biguanide', 2), ('GLP-1 RA', 2), ('SGLT2 Inhibitor', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0), ('Sulfonylurea', 0)],
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
		'Therapy Rankings': [('Biguanide', 3), ('GLP-1 RA', 2), ('Thiazolidinedione', 2), ('SGLT2 Inhibitor', 1), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0)],
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
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 1), ('GLP-1 RA', 1), ('Sulfonylurea', 1), ('Thiazolidinedione', 0), ('DPP-4 Inhibitor', -1)],
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
		'Therapy Rankings': [('Biguanide', 3), ('Thiazolidinedione', 2), ('Sulfonylurea', 2), ('GLP-1 RA', 0), ('SGLT2 Inhibitor', -1), ('DPP-4 Inhibitor', -1)],
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
		'Therapy Rankings': [('Biguanide', 2), ('GLP-1 RA', 2), ('SGLT2 Inhibitor', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', 1), ('DPP-4 Inhibitor', 0)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('Biguanide', 2), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', -2)],
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
		'Therapy Rankings': [('Biguanide', 3), ('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('Thiazolidinedione', 2), ('DPP-4 Inhibitor', 1), ('Sulfonylurea', -1)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('Biguanide', 2), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0), ('Sulfonylurea', -1)],
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
		'Therapy Rankings': [('Biguanide', 3), ('Thiazolidinedione', 2), ('SGLT2 Inhibitor', 0), ('DPP-4 Inhibitor', 0), ('GLP-1 RA', 0), ('Sulfonylurea', 0)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('Biguanide', 2), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 1), ('Thiazolidinedione', 1), ('Sulfonylurea', -1)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('Biguanide', 2), ('GLP-1 RA', 2), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', 0), ('Sulfonylurea', -1)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('Biguanide', 1), ('GLP-1 RA', 1), ('DPP-4 Inhibitor', -1), ('Sulfonylurea', -1), ('Thiazolidinedione', -2)],
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
		'Therapy Rankings': [('Biguanide', 2), ('SGLT2 Inhibitor', 0), ('GLP-1 RA', 0), ('Thiazolidinedione', 0), ('Sulfonylurea', 0), ('DPP-4 Inhibitor', -1)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('GLP-1 RA', 2), ('Biguanide', 1), ('DPP-4 Inhibitor', 0), ('Thiazolidinedione', -1), ('Sulfonylurea', -1)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('Biguanide', 2), ('GLP-1 RA', 1), ('Thiazolidinedione', 0), ('Sulfonylurea', 0), ('DPP-4 Inhibitor', -1)],
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
		'Therapy Rankings': [('Biguanide', 3), ('Thiazolidinedione', 2), ('Sulfonylurea', 1), ('SGLT2 Inhibitor', 0), ('GLP-1 RA', 0), ('DPP-4 Inhibitor', -1)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('Biguanide', 2), ('GLP-1 RA', 2), ('Thiazolidinedione', 1), ('DPP-4 Inhibitor', 0), ('Sulfonylurea', 0)],
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
		'Therapy Rankings': [('Biguanide', 2), ('Sulfonylurea', 1), ('SGLT2 Inhibitor', 0), ('Thiazolidinedione', 0), ('GLP-1 RA', -1), ('DPP-4 Inhibitor', -2)],
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
		'Therapy Rankings': [('SGLT2 Inhibitor', 2), ('Biguanide', 1), ('GLP-1 RA', 1), ('Sulfonylurea', 0), ('DPP-4 Inhibitor', -1), ('Thiazolidinedione', -1)],
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
		'Therapy Rankings': [('Biguanide', 2), ('Thiazolidinedione', 1), ('Sulfonylurea', 1), ('SGLT2 Inhibitor', 0), ('GLP-1 RA', 0), ('DPP-4 Inhibitor', -1)],
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
