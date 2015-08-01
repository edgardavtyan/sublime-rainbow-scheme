module.exports.load = function(syntax) {
	return {
		"UserSettings": {
			"ApplicationIdentity": { "-version": "10.0" },
			"ToolsOptions": {
				"ToolsOptionsCategory": {
					"-name": "Environment",
					"-RegisteredName": "Environment"
				}
			},
			"Category": {
				"-name": "Environment_Group",
				"-RegisteredName": "Environment_Group",
				"Category": {
					"-name": "Environment_FontsAndColors",
					"-Category": "{1EDA5DD4-927A-43a7-810E-7FD247D0DA1D}",
					"-Package": "{DA9FB551-C724-11d0-AE1F-00A0C90FFFC3}",
					"-RegisteredName": "Environment_FontsAndColors",
					"-PackageName": "Visual Studio Environment Package",
					"PropertyValue": {
						"-name": "Version",
						"#text": "2"
					},
					"FontsAndColors": {
						"-Version": "2.0",
						"Categories": {
							"Category": {
								"-GUID": "{A27B4E24-A735-4D1D-B8E7-9716E1E3D8E0}",
								"-FontIsDefault": "Yes",
								"Items": {
									"Item": syntax
								}
							}
						}
					}
				}
			}
		}
	}
}