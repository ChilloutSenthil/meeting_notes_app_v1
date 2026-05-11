import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'action-items-category': {
                        table: 'sys_ux_list_category'
                        id: '0715248d151948b38872cf72a6063740'
                    }
                    'all-action-items-list': {
                        table: 'sys_ux_list'
                        id: 'a028967d3d8c45d7950423f9b21a7a03'
                    }
                    'all-meetings-list': {
                        table: 'sys_ux_list'
                        id: '3c4f0d45da7a43669a4d766e5ebc47a6'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '64e2726b992440428f5a336e5f3f54af'
                    }
                    'meeting-app-instance': {
                        table: 'sp_instance'
                        id: '4250ba5afb6543669438b38d4411bf51'
                    }
                    'meeting-app-widget': {
                        table: 'sp_widget'
                        id: 'e4af476e283f4e758cd747611bb929d3'
                    }
                    'meeting-nav-config': {
                        table: 'sys_ux_list_menu_config'
                        id: 'a129f088fa2043108b90370d121ac639'
                    }
                    'meeting-page-col': {
                        table: 'sp_column'
                        id: 'e0c1bfd7c7eb4ddfaf83202a0d35e148'
                    }
                    'meeting-page-container': {
                        table: 'sp_container'
                        id: '9bbdb2540a0d404796f5e732d0982617'
                    }
                    'meeting-page-row': {
                        table: 'sp_row'
                        id: '48746238591747d1a66b064f23613b73'
                    }
                    'meeting-portal': {
                        table: 'sp_portal'
                        id: '38ffddc85c284b358b60d1e0a8d6aa60'
                    }
                    'meeting-workspace': {
                        table: 'sys_ux_page_registry'
                        id: '789a7faefbe04a07840c86d29662b790'
                    }
                    'meeting-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: 'f8d66fd892064afb9116018fa255416e'
                    }
                    'meeting-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: '96179ab7f96d4918994f7c983ecb0c4a'
                    }
                    'meeting-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: '09534a8d3e7d43eab002c2c08b76db7b'
                    }
                    'meeting-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: '05aeff72dbe94afd8362cfff08bf824e'
                    }
                    'meeting-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '9d8fd534513d42f3a6c31a6f5d505e89'
                    }
                    'meeting-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: '5669fc33e0cc45baacc4f5eb625ba32d'
                    }
                    'meeting-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: '7676283c7bc04614aab2cf57c659808a'
                    }
                    'meeting-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: 'b9225875b2d944e0ad24bc7d13101dfc'
                    }
                    'meeting-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: '7d94e721df704db989aa28ae33684278'
                    }
                    'meeting-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: '18652aee4fc9452f98cfe284fc9875e5'
                    }
                    'meeting-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'efe90bbbc2574ff6b598c4c178fb6859'
                    }
                    'meeting-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: '71fe88f83fca41e58e1cd599ea70a3eb'
                    }
                    'meeting-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'e4bfc634d09142ccac7deaac7807dbf3'
                    }
                    'meeting-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'a16a4049c9a3427c9440d1b29004aaa2'
                    }
                    'meeting-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: 'b7652b6c369148c0a35bdbf36a9c9994'
                    }
                    'meeting-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: 'c1220751b8b74920a64e4d77b62f27d9'
                    }
                    'meeting-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: 'edf3591847d449e3a538cfe5440dfcd2'
                    }
                    'meeting-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '763e1055dbab4047b4edd211f124b43d'
                    }
                    'meeting-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '1b50f71baa4d471e82481604e6146f69'
                    }
                    'meeting-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: '3f9a26a6b4274abb918ac3b7f031f817'
                    }
                    'meeting-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: '9d75224e6d4141c8b5b544a707044c60'
                    }
                    'meeting-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '90c4cd07cdc943aa9f42e987863a8626'
                    }
                    'meetings-category': {
                        table: 'sys_ux_list_category'
                        id: 'bd39ad94b1774ab0bf4955cb6762ce21'
                    }
                    'open-action-items-category': {
                        table: 'sys_ux_list_category'
                        id: 'abe94c1af25544cfb05ed804a87b7a90'
                    }
                    'open-action-items-list': {
                        table: 'sys_ux_list'
                        id: '49801d040dd14e9090612f28b132dbeb'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c52cae73780a439289e4fbda06364d32'
                    }
                    'scheduled-meetings-category': {
                        table: 'sys_ux_list_category'
                        id: 'a8f72d14796646f286d15ccf0c8f5a47'
                    }
                    'scheduled-meetings-list': {
                        table: 'sys_ux_list'
                        id: '41ff05060b8345918e9f4aedc9a0cb83'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '6a8ffde64cd44c728296a038f013c1c4'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_element'
                        id: '05e9bda46091408e9bfb8c3cd0fe4f80'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '094c0f4f83a648b983818235ca1f943e'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '09cfb805fc1b4ddc85967c6dd83fa8e1'
                        key: {
                            sys_ui_form: {
                                id: 'a3df5678d3e046c39363b95f62de5f32'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ce608ec5a3b74b24859ab70887f35c52'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c16afb7d6964e648ed330e37b619615'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d96e9698483411992e0abb78a3cc15c'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'meeting'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0f5001f243e843e0863297392af72bf5'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '121a370d5ad44475a5ceb9bd0e6d4a92'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '15d2fc642f08460b8e40e254bb939fcf'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1cbdb330c2f64408a74aa5f0d41b2677'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'host'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '2547871353d3417ca553c952bf137ac0'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2752076e775547228a4ee828bdaf4f8a'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'title'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '27e71ab39ec5406e94273dc5414c2455'
                        key: {
                            sys_ui_form: {
                                id: 'a3df5678d3e046c39363b95f62de5f32'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '8585d24244094dc385c8da3039f795dc'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Action Items'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2e7e83633b6c4d1b829dcfd8f1d536e7'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2eb604fbf8884d0184a51710c4070111'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'participants'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2f77d28067864736955a5642ebfd6d70'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '334859c3cd9441db86f03aacb0e51b3e'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3af8354fa44c415d87fcfabaf24b3238'
                        key: {
                            sys_ui_section: {
                                id: 'ebcc3b306b2b4344a42be9d7c442e1b5'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c7098545a0d40a1b0b7530302acfea5'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a37a2f8c9e74ccf9c3d3753f9d53d5a'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4ab5fe6933eb4985b33c30087298f6cd'
                        key: {
                            list_id: {
                                id: '2547871353d3417ca553c952bf137ac0'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e350c7ddc5f493bbb314415415fe0b3'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4f7d1bd9cabc40b7a49d91debceafc0e'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4faacc2c4e7b41c3b95314fb0b016d57'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4fc01c0ab657483681417352fc98022e'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            caption: 'Activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '547780336ad14e22aed2a0db7ebd04b5'
                        key: {
                            list_id: {
                                id: 'f5aab1000cf84da9ae52016cdf6c223c'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '565c9aaf6e6f4296903f01770f9b1e4e'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '568ceba8d23d4c17bdf683b96339a643'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5aaa507d1d5c447f904c9ecd8369291e'
                        key: {
                            list_id: {
                                id: '2547871353d3417ca553c952bf137ac0'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'meeting'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5c03af3a8b4448459a19c4dff1001d96'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61db2e876d77466d82dc2aa049350ded'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'host'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '6318b062407e408b8165cfcb4b769e03'
                        key: {
                            sys_ui_form: {
                                id: '9d3390d8d642492cbf1a0c87bb4215dd'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63ef282cb0b347dab4586a7bc08fa58c'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'meeting'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64415348cb7b4bf8a792d90182458d76'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '648e15f4a8da4454816e1a0e9d98ee74'
                        key: {
                            name: 'x_mtg_notes_action_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '680c4f790e5b4fe3b162f0ff45dde5d8'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'participants'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '689567c91ac04caba17f20d9d9b403e5'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69ccf6c1e61a4033ae7adcfe930e9880'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e1d0d78745144d9838bc14ccc482c19'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '725fa990fa0e45f7892213999d6af959'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7779d17351ef49339b22a093b67a5db7'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8376647decd24c859b4bb3852d6c3fe5'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '83ab17b123434abd9d8fe752ab19c0e7'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            caption: 'Meeting Information'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8542083aea174acf8f697d58f6304a15'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'participants'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8585d24244094dc385c8da3039f795dc'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            caption: 'Action Items'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '885d34999e064aad83cb26d8529d4e8e'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'meeting_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a0007a656524d50a98dd5e84d029291'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a68f5675f2f466dab2e578073c54e3c'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'status'
                            value: 'scheduled'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8b4020a63fe34c78bb34b7da3cbe133c'
                        key: {
                            list_id: {
                                id: '2547871353d3417ca553c952bf137ac0'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8b93f18387c3495992a31b15904e5fa9'
                        key: {
                            list_id: {
                                id: 'f5aab1000cf84da9ae52016cdf6c223c'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '8c292df9a1d5457d8df40daaba28084f'
                        key: {
                            sys_ui_form: {
                                id: 'a3df5678d3e046c39363b95f62de5f32'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ebcc3b306b2b4344a42be9d7c442e1b5'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8e012af9a9ff4f42ba606749dbd18b46'
                        key: {
                            list_id: {
                                id: 'f5aab1000cf84da9ae52016cdf6c223c'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8e1e43caa79f43e1a8e68b4df39d74ab'
                        key: {
                            sys_ui_section: {
                                id: '4fc01c0ab657483681417352fc98022e'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '91bbd33463304ece82c65af3c57eb664'
                        key: {
                            list_id: {
                                id: 'f5aab1000cf84da9ae52016cdf6c223c'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9281bd6f296446a0ae3bccfe0425d098'
                        key: {
                            list_id: {
                                id: '2547871353d3417ca553c952bf137ac0'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '931afabc7e6c485ab528c465599863f3'
                        key: {
                            category: 'x_mtg_notes_meeting'
                            prefix: 'MEET'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '938446235118452395077546f2bcb6e6'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '941e587ec4264b6989c5053855abc7b0'
                        key: {
                            sys_ui_form: {
                                id: '9d3390d8d642492cbf1a0c87bb4215dd'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '4fc01c0ab657483681417352fc98022e'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '983535955b354c8883f509c71f8eeddd'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '99b13f22fe7e4e8b800a2ccf5aa1981e'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9a8e06ee80ee4776b435339cfa3cc304'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'meeting_date'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9d3390d8d642492cbf1a0c87bb4215dd'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0141e8a3df84eebac4d5eee89f2b6ce'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'host'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'a3df5678d3e046c39363b95f62de5f32'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a605c8f903f846228715a3006a6d555c'
                        key: {
                            sys_ui_form: {
                                id: 'a3df5678d3e046c39363b95f62de5f32'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a626e42a8c2547dba68f0193e8dde8bb'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ac8518c91dc641b4a1699ce08d9a668d'
                        key: {
                            sys_ui_section: {
                                id: '83ab17b123434abd9d8fe752ab19c0e7'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'acaa1264207d4b589eb676fdb99c8b2e'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b1e77b785e9948378c56448bf4fd47a1'
                        key: {
                            list_id: {
                                id: 'f5aab1000cf84da9ae52016cdf6c223c'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'host'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b389e3b77bab4ac685262844839d3830'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'b7564cd8e565458491b96805313c25fb'
                        key: {
                            id: 'mtg_notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7ca43f6f6dc4444b31e839ae30fd387'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7f0022f4acb497dabf4f157a567621d'
                        key: {
                            sys_ui_section: {
                                id: 'ce608ec5a3b74b24859ab70887f35c52'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Meeting Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bb85a397aa234232a5045816375b05dc'
                        key: {
                            sys_ui_section: {
                                id: '8585d24244094dc385c8da3039f795dc'
                                key: {
                                    name: 'x_mtg_notes_meeting'
                                    caption: 'Action Items'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_mtg_notes_meeting.x_mtg_notes_action_item.meeting'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'be4295853eaa489785e836204a8b29e9'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c09bc751b790409fb5f6ab1df037c793'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c5e3871ec482429089593fd7c6c7ec7b'
                        key: {
                            list_id: {
                                id: '2547871353d3417ca553c952bf137ac0'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c821a00d589d4c4b995ea78aad2ea49e'
                        key: {
                            name: 'x_mtg_notes_meeting'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cc38698db27249618f1f3b89ffd91f6b'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ce608ec5a3b74b24859ab70887f35c52'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            caption: 'Meeting Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'cfb46435ee28440191c432dab89f474f'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            caption: 'Action Item Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1d44787c4384879a195464c554684b3'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7a144fe6e6c4c9b8fce059facbebfcb'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd98187e832d8444285c9c3e8e00a5de5'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e05fd9c4c7824711ab9c14b623d009da'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'meeting'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e6f3e1070e9a4220ab45a931663a678e'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'title'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ebcc3b306b2b4344a42be9d7c442e1b5'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            caption: 'Activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f284fbfa724846e2b77505dcd850ea31'
                        key: {
                            name: 'x_mtg_notes_action_item'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f3933d3265b14c9cbd49e3d30e358b46'
                        key: {
                            name: 'x_mtg_notes_action_item'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f48dc2fde59243098a31c7ec8d73a221'
                        key: {
                            name: 'x_mtg_notes_meeting'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'f5aab1000cf84da9ae52016cdf6c223c'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f87b1a93722d4c5ca52582a2d2999cf7'
                        key: {
                            name: 'x_mtg_notes_meeting'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fbd26c6517ea4b929e320de1f551d916'
                        key: {
                            sys_ui_section: {
                                id: 'cfb46435ee28440191c432dab89f474f'
                                key: {
                                    name: 'x_mtg_notes_action_item'
                                    caption: 'Action Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                ]
            }
        }
    }
}
