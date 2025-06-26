
document.addEventListener("DOMContentLoaded", function(){
    const botones = document.querySelectorAll(".item");
    const emp = document.querySelectorAll(".emp");
    const catalogo = document.querySelector(".catalogo");
    
    catalogo.addEventListener("mousedown",function(){
        emp.forEach((elemento) => {
            elemento.style.scale = 0;
            setTimeout(function(){
                elemento.style.display = "none";
            },1000);
        });

        setTimeout(function(){
            emp.forEach((elemento) =>{
                elemento.style.display = "flex";
                setTimeout(function(){
                    elemento.style.scale = 1;
                },500);
            });
        },1500);
    });

    
    botones.forEach((item,index) =>{
        switch (index) {
            case 0:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    })

                    setTimeout(function(){
                        emp.forEach((elemento) =>{
                            elemento.style.display = "flex";
                            setTimeout(function(){
                                elemento.style.scale = 1;
                            },500);
                        });
                    },1500);
                });

                break;

            case 1:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    });

                    setTimeout(function(){
                        emp.forEach((elemento,index) =>{
                            if (index != 0 && index != 1 && index != 3 && index != 9 && index != 10 && index != 11 && index != 12 && index != 13 && index != 14 && index != 15 && index != 17 && index != 19  && index != 21 && index != 22 && index != 23  && index != 27 && index != 28  && index != 29  && index != 30  && index != 26 && index != 31 && index != 32 && index != 33 && index != 34 && index != 35  && index != 37 && index != 38 && index != 39 && index != 40 && index != 41 && index != 43 && index != 44 && index != 47 && index != 48 && index != 49 && index != 50 && index != 51 && index != 53 && index != 54 && index != 55 && index != 57 && index != 58 && index != 60 && index != 61 && index != 62 && index != 65  && index != 73 && index != 74 && index != 75 && index != 80 && index != 85 && index != 86 && index != 88 && index != 89 && index != 90 && index != 93 && index != 92 && index != 94 && index != 97  && index != 98 && index != 101 && index != 103 && index != 104 && index != 106 && index != 107 && index != 108 && index != 110 && index != 111 && index != 112 && index != 121 && index != 122 ){
                                elemento.style.display = "flex";
                                setTimeout(function(){ 
                                    elemento.style.scale = 1;
                                },500);
                            } 
                        });   
                    },1500);  
                });
                break;
 
            case 2:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    })

                    setTimeout(function(){
                        emp.forEach((elemento,index) =>{
                            if (index == 9 || index == 10 || index == 11 || index == 13  || index == 15 && index != 17 && index != 19 || index ==26 || index ==31 || index ==33 && index != 36 && index != 38 && index != 39  || index == 40 || index == 41 || index == 44 || index == 49  || index == 53 || index == 55 || index == 58 ) {
                                elemento.style.display = "flex";
                                setTimeout(function(){
                                    elemento.style.scale = 1;
                                },500);
                            }
                        });
                    },1500)
                });

                break;
            
            case 3:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    })

                    setTimeout(function(){
                        emp.forEach((elemento,index) =>{
                            if (index == 0 || index == 3 || index == 12 || index == 21  || index == 22 || index == 23 || index == 27  || index == 30 || index ==32 || index ==35 || index ==37 || index ==32  || index ==43 || index ==47 || index ==48 || index ==51  || index ==57 || index ==60 || index ==61 || index ==62 || index ==75 || index ==85 || index ==86 || index ==89 || index ==90 || index ==94 || index ==97 || index ==98 || index ==101 || index ==103 || index ==107 || index ==108 || index ==110 || index ==121 || index ==122){
                                elemento.style.display = "flex";
                                setTimeout(function(){
                                    elemento.style.scale = 1;
                                },500);
                            }
                        });
                    },1500)
                });

                break;

            case 4:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    })

                    setTimeout(function(){
                        emp.forEach((elemento,index) =>{
                            if (index == 1 || index == 50){
                                elemento.style.display = "flex";
                                setTimeout(function(){
                                    elemento.style.scale = 1;
                                },500);
                            }
                        });
                    },1500)
                });

                break;

                case 5:
                    item.addEventListener("mousedown",function(){
                        emp.forEach((elemento) =>{
                            elemento.style.scale = 0;
                            setTimeout(function(){
                                elemento.style.display = "none";
                            },1000);
                        })
    
                        setTimeout(function(){
                            emp.forEach((elemento,index) =>{
                                if (index == 14){
                                    elemento.style.display = "flex";
                                    setTimeout(function(){
                                        elemento.style.scale = 1;
                                    },500);
                                }
                            });
                        },1500)
                    });
    
                    break;
                
                    case 6:
                        item.addEventListener("mousedown",function(){
                            emp.forEach((elemento) =>{
                                elemento.style.scale = 0;
                                setTimeout(function(){
                                    elemento.style.display = "none";
                                },1000);
                            })
        
                            setTimeout(function(){
                                emp.forEach((elemento,index) =>{
                                    if (index == 300){
                                        elemento.style.display = "flex";
                                        setTimeout(function(){
                                            elemento.style.scale = 1;
                                        },500);
                                    }
                                });
                            },1500)
                        });
        
                        break;
                    
                        case 7:
                            item.addEventListener("mousedown",function(){
                                emp.forEach((elemento) =>{
                                    elemento.style.scale = 0;
                                    setTimeout(function(){
                                        elemento.style.display = "none";
                                    },1000);
                                })
            
                                setTimeout(function(){
                                    emp.forEach((elemento,index) =>{
                                        if (index == 300){
                                            elemento.style.display = "flex";
                                            setTimeout(function(){
                                                elemento.style.scale = 1;
                                            },500);
                                        }
                                    });
                                },1500)
                            });
            
                            break;    
                        
                            case 8:
                                item.addEventListener("mousedown",function(){
                                    emp.forEach((elemento) =>{
                                        elemento.style.scale = 0;
                                        setTimeout(function(){
                                            elemento.style.display = "none";
                                        },1000);
                                    })
                
                                    setTimeout(function(){
                                        emp.forEach((elemento,index) =>{
                                            if (index == 300){
                                                elemento.style.display = "flex";
                                                setTimeout(function(){
                                                    elemento.style.scale = 1;
                                                },500);
                                            }
                                        });
                                    },1500)
                                });
                
                                break; 
                             
                                case 9:
                                    item.addEventListener("mousedown",function(){
                                        emp.forEach((elemento) =>{
                                            elemento.style.scale = 0;
                                            setTimeout(function(){
                                                elemento.style.display = "none";
                                            },1000);
                                        })
                    
                                        setTimeout(function(){
                                            emp.forEach((elemento,index) =>{
                                                if (index == 300){
                                                    elemento.style.display = "flex";
                                                    setTimeout(function(){
                                                        elemento.style.scale = 1;
                                                    },500);
                                                }
                                            });
                                        },1500)
                                    });
                    
                                    break;  
                                    
                                    case 10:
                                        item.addEventListener("mousedown",function(){
                                            emp.forEach((elemento) =>{
                                                elemento.style.scale = 0;
                                                setTimeout(function(){
                                                    elemento.style.display = "none";
                                                },1000);
                                            })
                        
                                            setTimeout(function(){
                                                emp.forEach((elemento,index) =>{
                                                    if (index == 300){
                                                        elemento.style.display = "flex";
                                                        setTimeout(function(){
                                                            elemento.style.scale = 1;
                                                        },500);
                                                    }
                                                });
                                            },1500)
                                        });
                        
                                        break;       
                                    
                                        case 11:
                                            item.addEventListener("mousedown",function(){
                                                emp.forEach((elemento) =>{
                                                    elemento.style.scale = 0;
                                                    setTimeout(function(){
                                                        elemento.style.display = "none";
                                                    },1000);
                                                })
                            
                                                setTimeout(function(){
                                                    emp.forEach((elemento,index) =>{
                                                        if (index == 300){
                                                            elemento.style.display = "flex";
                                                            setTimeout(function(){
                                                                elemento.style.scale = 1;
                                                            },500);
                                                        }
                                                    });
                                                },1500)
                                            });
                            
                                            break;  
                                        
                                            case 12:
                                                item.addEventListener("mousedown",function(){
                                                    emp.forEach((elemento) =>{
                                                        elemento.style.scale = 0;
                                                        setTimeout(function(){
                                                            elemento.style.display = "none";
                                                        },1000);
                                                    })
                                
                                                    setTimeout(function(){
                                                        emp.forEach((elemento,index) =>{
                                                            if (index ==19 || index == 29 ){
                                                                elemento.style.display = "flex";
                                                                setTimeout(function(){
                                                                    elemento.style.scale = 1;
                                                                },500);
                                                            }
                                                        });
                                                    },1500)
                                                });
                                
                                                break;    
                                            
                                                case 13:
                                                    item.addEventListener("mousedown",function(){
                                                        emp.forEach((elemento) =>{
                                                            elemento.style.scale = 0;
                                                            setTimeout(function(){
                                                                elemento.style.display = "none";
                                                            },1000);
                                                        })
                                    
                                                        setTimeout(function(){
                                                            emp.forEach((elemento,index) =>{
                                                                if (index == 65){
                                                                    elemento.style.display = "flex";
                                                                    setTimeout(function(){
                                                                        elemento.style.scale = 1;
                                                                    },500);
                                                                }
                                                            });
                                                        },1500)
                                                    });
                                    
                                                    break;  
                                                    
                                                    case 14:
                                                        item.addEventListener("mousedown",function(){
                                                            emp.forEach((elemento) =>{
                                                                elemento.style.scale = 0;
                                                                setTimeout(function(){
                                                                    elemento.style.display = "none";
                                                                },1000);
                                                            })
                                        
                                                            setTimeout(function(){
                                                                emp.forEach((elemento,index) =>{
                                                                    if (index == 17 || index == 28 || index == 34 || index == 38 || index == 39 || index == 54 || index == 88 ){
                                                                        elemento.style.display = "flex";
                                                                        setTimeout(function(){
                                                                            elemento.style.scale = 1;
                                                                        },500);
                                                                    }
                                                                });
                                                            },1500)
                                                        });
                                        
                                                        break;   
                                                    
                                                        case 15:
                                                            item.addEventListener("mousedown",function(){
                                                                emp.forEach((elemento) =>{
                                                                    elemento.style.scale = 0;
                                                                    setTimeout(function(){
                                                                        elemento.style.display = "none";
                                                                    },1000);
                                                                })
                                            
                                                                setTimeout(function(){
                                                                    emp.forEach((elemento,index) =>{
                                                                        if (index == 300){
                                                                            elemento.style.display = "flex";
                                                                            setTimeout(function(){
                                                                                elemento.style.scale = 1;
                                                                            },500);
                                                                        }
                                                                    });
                                                                },1500)
                                                            });
                                            
                                                            break; 
                                                            
                                                            case 16:
                                                                item.addEventListener("mousedown",function(){
                                                                    emp.forEach((elemento) =>{
                                                                        elemento.style.scale = 0;
                                                                        setTimeout(function(){
                                                                            elemento.style.display = "none";
                                                                        },1000);
                                                                    })
                                                
                                                                    setTimeout(function(){
                                                                        emp.forEach((elemento,index) =>{
                                                                            if (index == 300){
                                                                                elemento.style.display = "flex";
                                                                                setTimeout(function(){
                                                                                    elemento.style.scale = 1;
                                                                                },500);
                                                                            }
                                                                        });
                                                                    },1500)
                                                                });
                                                
                                                                break;  
                                                                
                                                                case 17:
                                                                    item.addEventListener("mousedown",function(){
                                                                        emp.forEach((elemento) =>{
                                                                            elemento.style.scale = 0;
                                                                            setTimeout(function(){
                                                                                elemento.style.display = "none";
                                                                            },1000);
                                                                        })
                                                    
                                                                        setTimeout(function(){
                                                                            emp.forEach((elemento,index) =>{
                                                                                if (index == 104){
                                                                                    elemento.style.display = "flex";
                                                                                    setTimeout(function(){
                                                                                        elemento.style.scale = 1;
                                                                                    },500);
                                                                                }
                                                                            });
                                                                        },1500)
                                                                    });
                                                    
                                                                    break; 
                                                                 
                                                                    case 18:
                                                                        item.addEventListener("mousedown",function(){
                                                                            emp.forEach((elemento) =>{
                                                                                elemento.style.scale = 0;
                                                                                setTimeout(function(){
                                                                                    elemento.style.display = "none";
                                                                                },1000);
                                                                            })
                                                        
                                                                            setTimeout(function(){
                                                                                emp.forEach((elemento,index) =>{
                                                                                    if (index == 300){
                                                                                        elemento.style.display = "flex";
                                                                                        setTimeout(function(){
                                                                                            elemento.style.scale = 1;
                                                                                        },500);
                                                                                    }
                                                                                });
                                                                            },1500)
                                                                        });
                                                        
                                                                        break; 
                                                                        case 19:
                                                                            item.addEventListener("mousedown",function(){
                                                                                emp.forEach((elemento) =>{
                                                                                    elemento.style.scale = 0;
                                                                                    setTimeout(function(){
                                                                                        elemento.style.display = "none";
                                                                                    },1000);
                                                                                })
                                                            
                                                                                setTimeout(function(){
                                                                                    emp.forEach((elemento,index) =>{
                                                                                        if (index == 73 || index == 74 || index == 80 || index == 106 ){
                                                                                            elemento.style.display = "flex";
                                                                                            setTimeout(function(){
                                                                                                elemento.style.scale = 1;
                                                                                            },500);
                                                                                        }
                                                                                    });
                                                                                },1500)
                                                                            });
                                                            
                                                                            break; 

                                                                            case 20:
                                                                                item.addEventListener("mousedown",function(){
                                                                                    emp.forEach((elemento) =>{
                                                                                        elemento.style.scale = 0;
                                                                                        setTimeout(function(){
                                                                                            elemento.style.display = "none";
                                                                                        },1000);
                                                                                    })
                                                                
                                                                                    setTimeout(function(){
                                                                                        emp.forEach((elemento,index) =>{
                                                                                            if (index == 93){
                                                                                                elemento.style.display = "flex";
                                                                                                setTimeout(function(){
                                                                                                    elemento.style.scale = 1;
                                                                                                },500);
                                                                                            }
                                                                                        });
                                                                                    },1500)
                                                                                });
                                                                
                                                                                break;  
                                                                                
                                                                                case 21:
                                                                                    item.addEventListener("mousedown",function(){
                                                                                        emp.forEach((elemento) =>{
                                                                                            elemento.style.scale = 0;
                                                                                            setTimeout(function(){
                                                                                                elemento.style.display = "none";
                                                                                            },1000);
                                                                                        })
                                                                    
                                                                                        setTimeout(function(){
                                                                                            emp.forEach((elemento,index) =>{
                                                                                                if (index ==300){
                                                                                                    elemento.style.display = "flex";
                                                                                                    setTimeout(function(){
                                                                                                        elemento.style.scale = 1;
                                                                                                    },500);
                                                                                                }
                                                                                            });
                                                                                        },1500)
                                                                                    });
                                                                    
                                                                                    break;       
            default:             
                
            break;
        };
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
  const catalogo = document.querySelector('.catalogo_list');
  const subtitulo = document.getElementById('subtitulo-categoria');
  catalogo.addEventListener('click', event => {
    const op = event.target.closest('.op');
    if (op) subtitulo.innerText = ` ${op.innerText.trim()}`;
  });
});
