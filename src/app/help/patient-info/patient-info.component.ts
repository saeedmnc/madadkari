import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CaseWorkerListService} from "../../services/Case-worker/Case-woeker-patientList/case-worker-list.service";
import { DangerGroup} from "../../help/interFace/DangerGroup"
import {eOtherCasesMainDisease} from "../../eOtherCasesMainDisease";
import{ modakhele} from './../interFace/modakheleInterface';
import { targetArray} from './../interFace/targetArray';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
    persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    today = new Date().toLocaleDateString('fa-IR');
    FinallParsent:number;
    shortExplain=""
    children=""
    behdashPersent:number
    kheyriePersent:number
    suggestionAfter=""
    nikPersent:number
    nikMoney=""
    kheyrieMoney=""
    notDolatiPersent:number
    notDolatiMoney=''
    behdashtMoney=""
    dolatiPersent:number
    dolatiMoney=''
    relativeName=""
    interanceCode=""
    Targetnumberofarray=0
    colorID:number
    HelpPersent:number
    showDanger=false;
    color:number
    Level="الویت چهارم"
    finalScore:number=5;
    hasRelative:boolean=false;
    ShowRand:boolean=true
    containers= [];
    expalinIDea=""
    hasIntervention:boolean=false;
    InterventionContainer=[];
    parvandeMadadkariContainer=[];
    hasFallowUp=false;
    hasSuppoortOK=true;
    graay=false;
    CaseworkerId="";
    info:any[];
    FinalExplain=""
    MOdakheleDate=""
    id="";
    persent='0';
    code='';
    FinalInterventionSecondValue="";
    FinalInterventionThirdValue="";
    dangerLenght:number;
    netwokSuport=""
    dangerInput=new Array();
    InterventionArray=new Array();
    FinalInterventionFirstArray=new Array();
    FinalInterventionSecondArray=new Array();
    FinalInterventionThirdArray=new Array();
    TargetArray=[]
    eghdamat="اقدامات"
    showGruopMain=false;
    eghdamatShow=true
    showChildAbouse=true;
    dangerValue="";
    dangerScore:number;
    Interventioncode="";
    dangerValue2="";
    dangerInput2:Array<any>=[];
    array:Array<any>=[]
    showDanger2=false
    InsurancecoverageScore:number
    ESIScore:number;
    supportNetworkCode=""
    EffectiveCompanionInput="";
    InsurancecoverageInput="";
    FinalInterventionFirstValue=""
    supportNetworkInput:Array<any>=[];
    ESIInput=""
    EffectiveCompanionScore:number
    ShowInsurancecoverage=false
    ShowEffectiveCompanion=false;
    ShowIntervention=false;
    ShowESI=false;
    ShowSupportNetwork=false;
    TargetInputValue=""
    SummeryText="";
    FallowProgram=""
    PsychologicalconditionsValue=""
    PsychologicalconditionsID:number;
    EconomicSituationID:number
    DisorderValue="";
    array1:Array<any>=[]
    DisorderID:number;
    EconomicSituationValue="";
    LegalValue="";
    JObsCode:""
    LegalID:number;
    InterventionValue=""
    FinalInterventionSelect='';
    FinalInterventionID="";
    showFinalIntervention=false;
    ShowFinalInterventionFirst=false;
    ShowFinalInterventionSecond=false;
    ShowFinalInterventionThird=false;
    targetItemInputValue="";
    time=new Date();
    finalTime:any;
    numberofarray : number = 0;
    numberofarrayY:number= 0;
    arraaaay=new Array();
    numberofTragetArray=0;
    Active=false;
    InteranceValue='';
    relatedTel='';
    educationCode="";
    maritalValue="";
    maritalCode="";

    relatedPerson=[
        {code:'1',value:'پدر'},
        {code:'1',value:'مادر'},
        {code:'1',value:'پدر بزرگ'},
        {code:'1',value:'مادر بزرگ'},
        {code:'1',value:'خواهر'},
        {code:'1',value:'برادر'},
        {code:'1',value:'همسر'},
        {code:'1',value:'فرزند'},
        {code:'1',value:'فامیل'},
        {code:'1',value:'دوست'},
        {code:'1',value:'آشنا'},
        {code:'1',value:'همسایه'},
        {code:'1',value:'همکار'},
        {code:'1',value:'سایر'},
        ]
    targetGroupMAin=[
        {id:"1",value:"کودک آزاری",score:"5"},
        {id:"2",value:"سوءرفتار یا خشونت",score:"5"},
        {id:"3",value:"اختالالت سایکوتیک",score:"5"},
        {id:"4",value:"مشکل سرپرستی خانواده",score:"5"},
        {id:"5",value:"نابسامانی خانواده",score:"5"},
        {id:"6",value:"شرایط بحرانی",score:"5"},
        {id:"7",value:"مدارک هویتی و بیمه",score:"5"},
        {id:"8",value:"سایر گروه های پرخطر",score:"5"},
        {id:"9",value:"بیماری های حاد و مزمن",score:"5"},

    ]
    childAbuse=[
        {code:'Z25028',value:'خشونت فیزیکی علیه کودکان (تنبیه بدنی)',persent:"20"},
        {code:'Z25027',value:'خشونت جنسی (تجاوز به کودکان)',persent:"20"},
        {code:'Z19008',value:'کودک رها شده (خیابانی)',persent:"20"},
        {code:'Z22005',value:'کودک کار',persent:"20"},
        {code:'Z16001',value:'خشونت عاطفی روانی',persent:"5"},
        {code:'Z16001',value:'غفلت از کودک',persent:"5"},
        ]
    Violence=[
        {code:'Z13007',value:'خشونت علیه زنان (فیزیکی)',persent:"20"},
        {code:'Z13008',value:'خشونت علیه زنان (جنسی)',persent:"20"},
        {code:'Z13002',value:'خشونت علیه زنان (روانی، از بین بردن استقلال مالی، محرومیت و محدودیت)',persent:"5"},
        {code:'Z25040',value:'خشونت فیزیکی علیه شریک زندگی',persent:"20"},
        {code:'Z25042',value:'خشونت جنسی علیه شریک زندگی',persent:"20"},
        {code:'Z25020',value:'خشونت علیه سالمندان و معلولین',persent:"دستورالعمل وزارتی دارد."},
    ]
    sycotik=[
        {code:'P72012',value:'اختلالات هذیانی',persent:"دستورالعمل وزارتی دارد."},
        {code:'P73004',value:'دوقطبی',persent:"دستورالعمل وزارتی دارد."},
        {code:'P74004',value:'اختلالات اضطرابی',persent:"دستورالعمل وزارتی دارد."},
        {code:'P76004',value:'افسردگی',persent:"دستورالعمل وزارتی دارد."},
        {code:'P79004',value:'سایر اختلالات روان',persent:"دستورالعمل وزارتی دارد."},
        {code:'P19024',value:'سوء مصرف مواد',persent:"20"},
    ]
    parentProblem=[
        {code:'Z15004',value:'متارکه',persent:"20"},
        {code:'Z15012',value:'فوت همسر',persent:"20"},
        {code:'Z15001',value:'طلاق',persent:"20"},
        {code:'Z13001',value:'همسر الکلی',persent:"20"},
        {code:'Z13002',value:'همسر پرخاشگر',persent:"20"},
        {code:'Z13003',value:'همسر قمار باز',persent:"20"},
        {code:'Z13004',value:'همسر روابط فرازناشویی',persent:"20"},
        {code:'Z13006',value:'همسر معتاد',persent:"20"},
    ]
    DisorderFamily=[
        {code:'Z03011',value:'خانواده دارای عضو معلول، بیماری خاص، صعب العلاج و سایر بیماری های مزمن',persent:"20"},
        {code:'A58010',value:'خانواده های تحت پوشش سازمان های حمایتی (کمیته امداد و سازمان بهزیستی)',persent:"20"},
        {code:'Z03006',value:'بی خانمان (کارتن خواب)',persent:"20"},
        {code:'Z01003',value:'مشکل مالی',persent:"20"},
        {code:'Z04002',value:'مشکل فرهنگی اجتماعی',persent:"20"},
        {code:'Z05003',value:'مشکل شغل',persent:"20"},
        {code:'Z06004',value:'مشکل بیکاری',persent:"20"},
        {code:'Z07004',value:'مشکل تحصیلی',persent:"20"},
        {code:'Z08002',value:'مشکل رفاه',persent:"20"},
    ]
    Criticalconditions=[
        {code:'A80007',value:'حوادث غیرمترقبه (سقوط، زورگیری و ...)',persent:"20"},
        {code:'P77006',value:'افکار خودکشی',persent:"5"},
        {code:'P77004',value:'اقدام به خودکشی',persent:"20"},
        {code:'Z09001',value:'نزاع و درگیری (ضرب و جرح)',persent:"20"},
        {code:'Z23004',value:'ناپدید شدن و مرگ والدین',persent:"20"},
        {code:'Z15012',value:'ناپدید شدن و مرگ همسر',persent:"20"},
        {code:'Z19006',value:'ناپدید شدن و مرگ کودک',persent:"20"},
        {code:'A80006',value:'تصادفات رانندگی',persent:"دستورالعمل وزارتی دارد"},
        {code:'P02021',value:'حوادث و بلایای طبیعی',persent:"70"},
    ]
    Insurancedocuments=[
        {code:'A80007',value:'ایرانی فاقد مدارک هویتی و بیمه',persent:"20"},
        {code:'P77006',value:'ایرانی فاقد والدین یا قیم قانونی',persent:"20"},
        {code:'P77004',value:'اتباع فاقد کدآمایش',persent:"20"},
        {code:'Z09001',value:'مجهول الهویه',persent:"70"},
        {code:'Z23004',value:'نوزادان متولد از ازدواج های غیرثبتی',persent:"70"},

    ]
    other=[
        {code:'A23011',value:'زنان ویژه',persent:"20"},
        {code:'W84004',value:'بارداری پر خطر',persent:"70"},
        {code:'W84012',value:'بارداری نیازمند مراقبت ویژه',persent:"20"},
        {code:'B90004',value:'بیمار HIV مثبت',persent:"20"},
        {code:'D72002',value:'بیمار دارای هپاتیت',persent:"20"},
        {code:'Z09001',value:'متهمین، محکومین یا مجرمین بیمار',persent:"20"},


    ]
    Acutedisease=[
        {code:'B78005',value:'تالاسمی',persent:"دستورالعمل وزارتی دارد."},
        {code:'B83010',value:'هموفیلی',persent:"دستورالعمل وزارتی دارد."},
        {code:'P99005',value:'اتیسم',persent:"دستورالعمل وزارتی دارد."},
        {code:'T99074',value:'متابولیک',persent:"دستورالعمل وزارتی دارد."},
        {code:'U59008',value:'بیماری خاص (دیالیز)',persent:"دستورالعمل وزارتی دارد."},
        {code:'U28001',value:'پیوند',persent:"دستورالعمل وزارتی دارد."},
        {code:'A79001',value:'سرطان',persent:"دستورالعمل وزارتی دارد."},
        {code:'A28008',value:'معلولیت جسمی',persent:"20"},
        {code:'W15001',value:'ناباروری',persent:"دستورالعمل وزارتی دارد"},
        {code:'L19015',value:'SMA',persent:"دستورالعمل وزارتی دارد."},
        {code:'T99053',value:'CF',persent:"دستورالعمل وزارتی دارد."},
        {code:'K82001',value:'PPH',persent:"دستورالعمل وزارتی دارد."},
        {code:'S83001',value:'EB',persent:"دستورالعمل وزارتی دارد."},
    ]
    dangerGroups=[
        {code:'B78005',value:'کودک آزاری',score:15},
        {code:'B83010',value:'سوءرفتار یا خشونت',score:15},
        {code:'P99005',value:'سوء مصرف مواد',score:15},
        {code:'T99074',value:'نزاع و درگیری (ضرب و جرح)',score:15},
        {code:'U59008',value:'اقدام به خودکشی',score:15},
        {code:'U28001',value:'مادران باردار پرخطر',score:15},
        {code:'A79001',value:'ختلالات سایکوتیک',score:15},
        {code:'A28008',value:'بی خانمانی',score:15},
        {code:'W15001',value:'مجهول الهویه',score:15},
        {code:'L19015',value:'بیماری خاص',score:15},
        {code:'T99053',value:'صعب العلاج',score:15},

    ]
    selectedCityIds: string[]

    EffectiveCompanion =[
        {code:'35.9.2',value:'فاقد همراه مؤثر است ',score:5},
        {code:'B83010',value:'اطلاعات دارد، می تواند رضایت قانونی بدهد اما مشارکت خوبی ندارد',score:4},
        {code:'P99005',value:'اطلاعات کافی دارد، مشارکت دارد اما مجاز به ارائه رضایت قانونی نیست',score:3},
        {code:'T99074',value:'اطلاعات ندارد، مشارکت می کند و می تواند رضایت قانونی بدهد',score:2},
        {code:'U59008',value:' همراه مؤثر حضور دارد',score:1},


    ]
    Insurancecoverage =[
        {code:'35.9.2',value:'بیمار تبعه غیرایرانی و فاقد بیمه است:',score:5},
        {code:'B83010',value:'بیمار فرد ایرانی و فاقد مدارک هویتی است',score:4},
        {code:'P99005',value:'بیمار تبعه غیرایرانی و دارای بیمه است',score:3},
        {code:'T99074',value:'یمار فرد ایرانی و دارای مدارک هویتی فاقد بیمه است:',score:2},
        {code:'U59008',value:'بیمار فرد ایرانی دارای بیمه است',score:1},
    ]
    ESI =[
        {code:'35.9.2',value:'فاقد پاسخدهی (سطح یک)',score:5},
        {code:'B83010',value:'وضعیت پرخطر (سطح دو)',score:4},
        {code:'P99005',value:' تعداد تسهیالت مورد نیاز، 2 یا بیشتر (سطح سه)',score:3},
        {code:'T99074',value:'تعداد تسهیالت مورد نیاز، 1( سطح چهار)',score:2},
        {code:'U59008',value:'عدم نیاز به تسهیالت (سطح پنج)',score:1},
    ]
    supportNetwork =[
        {code:'1.9.2.1',value:'کمیته امداد',},
        {code:'1.9.2.2',value:'بهزیستی'},
        {code:'1.9.2.3',value:'هلال احمر'},
        {code:'1.9.2.4',value:'بنیاد شهید و امور ایثارگران'},
        {code:'1.9.2.5',value:'سازمان اوقاف'},
        {code:'1.9.2.6',value:'کمیساریای عالی امور پناهندگان'},
        {code:'1.9.2.7',value:'موسسات خیریه'},
        {code:'1.9.2.8',value:'سازمان مردم نهاد (NGO)'},
        {code:'1.9.2.9',value:'خانواده'},
        {code:'1.9.2.10',value:'دوستان'},
        {code:'1.9.2.11',value:'خویشاوندان'},
        {code:'1.9.2.12',value:'آشنایان'},
        {code:'1.9.2.13',value:'عدم عضویت'},
    ]
    Intervention =[
        {code:'1.9.3.1',value:'ارزیابی روانی اجتماعی',},
        {code:'1.9.3.2',value:'مشاوره فردی'},
        {code:'1.9.3.3',value:'مشاوره گروهی'},
        {code:'1.9.3.4',value:'مشاوره خانوادگی'},
        {code:'1.9.3.5',value:'آموزش فردی'},
        {code:'1.9.3.6',value:'آموزش گروهی'},
        {code:'1.9.3.9',value:'آموزش خانوادگی'},
        {code:'1.9.3.8',value:'حمایت یابی درون سازمانی (اقتصادی)'},
        {code:'1.9.3.9',value:'حمایت یابی درون سازمانی (روانی- اجتماعی)'},
        {code:'1.9.3.10',value:'حمایت یابی برون سازمانی (اقتصادی)'},
        {code:'1.9.3.11',value:'حمایت یابی برون سازمانی (روانی- اجتماعی)'},
        {code:'1.9.3.12',value:'ارجاع درون سازمانی'},
        {code:'1.9.3.13',value:'ارجاع برون سازمانی (به کمیته امداد)'},
        {code:'1.9.3.14',value:'ارجاع برون سازمانی (به اورژانس اجتماعی بهزیستی)'},
        {code:'1.9.3.15',value:'ارجاع برون سازمانی (مراکز کاهش آسیب بهزیستی)'},
        {code:'1.9.3.16',value:'ارجاع برون سازمانی (مراکز مراقبتی بهزیستی)'},
        {code:'1.9.3.17',value:'ارجاع برون سازمانی (مراکز توانبخشی بهزیستی)'},
        {code:'1.9.3.18',value:'ارجاع برون سازمانی (مراکز نگهداری بهزیستی)'},
        {code:'1.9.3.19',value:'ارجاع برون سازمانی (هلال احمر)'},
        {code:'1.9.3.20',value:'ارجاع برون سازمانی (بنیاد شهید و امور ایثارگران)'},
        {code:'1.9.3.21',value:'ارجاع برون سازمانی (مراجع قضایی- دادسرا)'},
        {code:'1.9.3.22',value:'ارجاع برون سازمانی (مراجع قضایی- نیروی انتظامی 110)'},
        {code:'1.9.3.23',value:'ارجاع برون سازمانی (شهرداری)'},
        {code:'1.9.3.24',value:'ارجاع برون سازمانی (سازمان اوقاف)'},
        {code:'1.9.3.25',value:'ارجاع برون سازمانی (کمیساریای امور پناهندگان)'},
        {code:'1.9.3.26',value:'ارجاع برون سازمانی (ریاست جمهوری)'},
        {code:'1.9.3.27',value:'ارجاع برون سازمانی (سازمان زندان ها)'},
        {code:'1.9.3.28',value:'ارجاع برون سازمانی (شبکه بهداشت)'},
        {code:'1.9.3.29',value:'ارجاع برون سازمانی (پزشکی قانونی)'},
        {code:'1.9.3.30',value:'ارجاع برون سازمانی (ثبت احوال)'},
        {code:'1.9.3.31',value:'ارجاع برون سازمانی (سایر دانشگاه های علوم پزشکی)'},
        {code:'1.9.3.32',value:'ارجاع برون سازمانی (وزارت بهداشت)'},
        {code:'1.9.3.33',value:'ارجاع برون سازمانی (سازمان فنی حرفه ای)'},
        {code:'1.9.3.34',value:'ارجاع برون سازمانی (مراکز بیمه)'},
        {code:'1.9.3.35',value:'ارجاع برون سازمانی (موسسات خیریه)'},
        {code:'1.9.3.36',value:'ارجاع برون سازمانی (سازمان مردم نهاد )'},
        {code:'1.9.3.37',value:'مداخله در بحران'},
        {code:'1.9.3.38',value:'پیگیری پس از ترخیص'},
        {code:'1.9.3.39',value:'بازدید منزل'},
        {code:'1.9.3.40',value:'مراجعه مددکار اجتماعی به سازمان های حمایتی یا قانونی'},
        {code:'1.9.3.41',value:'سایر مداخلات'},
    ]
    FinalIntervention =[
        {value:'دستیابی موفق به اهداف مداخله و ترخیص ایمن بیمار',id:'1'},
        {value:'دستیابی نسبی به اهداف مداخله و ترخیص بیمار',id:'2'},
        {value:'عدم دستیابی به اهداف مداخله و عدم ترخیص بیمار',id:'3'},


    ]
    FinalInterventionFirst =[
        {value:'همکاری و همراهی بیمار در پیشبرد مداخالت',id:'1'},
        {value:'همکاری همراهان موثر و خانواده بیمار در پیشبرد مداخالت',id:'2'},
        {value:'استفاده موثر از منابع موجود',id:'3'},
        {value:'همکاری موثر سازمانهای برونبخشی',id:'4'},
    ]
    FinalInterventionSecond =[
        {value:'نداشتن همراهان موثر',id:'1'},
        {value:'عدم همکاری موثر بیمار',id:'2'},
        {value:'ضعف همکاری سازمانهای برونبخشی',id:'3'},
        {value:'نتیجه مداخالت منوط به اقدامات سایر سازمانهای برونبخشی',id:'4'},
        {value:'کمبود منابع و امکانات موجود',id:'5'},
    ]
    FinalInterventionThird =[
        {value:'امتناع بیمار از پیشبرد مداخالت',id:'1'},
        {value:'امتناع خانواده یا همراهان بیمار از پیشبرد مداخالت',id:'2'},
        {value:' عدم موفقیت در جذب منابع',id:'3'},
        {value:'نتیجه مداخالت منوط به اقدامات سایر سازمانهای برونبخشی',id:'4'},
        {value:'ترخیص بیمار مشروط به اقدامات سایر سازمانهای متولی',id:'5'},
    ]
    Jobs =[
        {code:'24043',value:'کارمند'},
        {code:'24032',value:'کارگر'},
        {code:'99994',value:'آزاد'},
        {code:'99996',value:'بازنشسته'},
        {code:'99995',value:'از کار افتاده'},
        {code:'99993',value:'خانه دار'},
        {code:'99992',value:'محصل'},
        {code:'99991',value:'بیکار'},
        {code:'24039',value:'سایر مشاغل'},
    ]
    InteranceType=[
        {code:'1.9.1.1',value:'خود ارجاع'},
        {code:'1.9.1.2',value:'راند'},
        {code:'1.9.1.3',value:'تریاژ'},
        {code:'1.9.1.4',value:'ارجاع از کادر درمان'},
        {code:'1.9.1.5',value:'ارجاع از سازمان های دولتی'},
        {code:'1.9.1.6',value:'ارجاع از سازمان های غیردولتی'},
        {code:'1.9.1.7',value:'سایر'}
        ]
    education=[
        {code:'1',value:'بی سواد'},
        {code:'2',value:'ابتدايی'},
        {code:'3',value:'راهنمايی'},
        {code:'4',value:'متوسطه'},
        {code:'6',value:'دیپلم'},
        {code:'100',value:'دانشجوي کاردانی'},
        {code:'101',value:'کاردانی'},
        {code:'110',value:'دانشجوي کارشناسی'},
        {code:'111',value:' کارشناسی'},
        {code:'140',value:'دانشجوي کارشناسی ارشد'},
        {code:'141',value:'کارشناسی ارشد'},
        {code:'150',value:' دانشجوي دکتراي حرفه اي'},
        {code:'151',value:'دکتراي حرفه اي'},
        {code:'170',value:'دانشجوي تخصص'},
        {code:'171',value:'تخصص'},
        {code:'200',value:'دانشجوي فوق تخصص'},
        {code:'201',value:'فوق تخصص'},
        {code:'210',value:'دانشجوي فلوشیپ'},
        {code:'211',value:'فلوشیپ'},
        {code:'190',value:'دانشجوي دکتري تخصصی'},
        {code:'191',value:' دکتراي تخصصی'},
    ]
        MaritalStatus=[
            {code:'1',value:'طلاق گرفته'},
            {code:'2',value:'متاهل'},
            {code:'3',value:'مجرد'},
            {code:'4',value:'همسر فوت شده'},

        ]

    data:Array<any>=[];
    dataRand:Array<any>=[]
    constructor(private modalService: NgbModal,
              private _service:CaseWorkerListService,
  ) { }
    getnikPresent(event){
        console.log(typeof this.nikPersent)
        if (this.nikPersent>100){
            this.nikPersent=100
        }
    }
    getbehdashPersent(){
        if (this.behdashPersent>100){
            this.behdashPersent=100
        }
    }

    getKheyrieMOney(){
        if (this.kheyriePersent>100){
            this.kheyriePersent=100
        }
    }
    getnotDolatiPersent(){
        if (this.notDolatiPersent>100){
            this.notDolatiPersent=100
        }
    }
    getdolatiPersent(){
        if (this.dolatiPersent>100){
            this.dolatiPersent=100
        }
    }
    getMaritalStatus(code,value){
        this.maritalCode=code;
        this.maritalValue=value
    }
    getChildren(event){
        this.children=event.target.value
    }
    getEducation(event){
        this.educationCode=event.target.value;
    }
    getINteranceType(code,value){
        this.InteranceValue=value;
        this.interanceCode=code
    }
    getJobs(event){
        this.JObsCode=event.target.value;
        console.log(this.JObsCode);
    }
    Computing(){
        this.FinallParsent=this.HelpPersent + Number(this.persent)
        console.log(this.FinallParsent);
        if (this.FinallParsent<0){
            this.FinallParsent=0
        }
    }
    InsurancecoverageList(){
        this.ShowInsurancecoverage=true
    }
    getFinalIntervention(id:any,value:any){
        this.FinalInterventionSelect=value
        this.FinalInterventionID=id;
        console.log(this.FinalInterventionID)
        this.showFinalIntervention=false
    }
    supportNetworkList(){
        this.ShowSupportNetwork=true
    }
    showFinalInterventionList(){
        this.showFinalIntervention=true
    }
    focuseInput(){
        this.showGruopMain=true;
        // this.numberofTragetArray=this.numberofTragetArray+1
    }
    EffectiveCompanionList(){
        this.ShowEffectiveCompanion=true
    }
    ShowFinalInterventionFirstList(){
        this.eghdamatShow=false
       this.ShowFinalInterventionFirst=true
    }
    ShowFinalInterventionSecondList(){
        this.eghdamatShow=false
        this.ShowFinalInterventionSecond=true
    }
    ShowFinalInterventionThirdList(){
        this.eghdamatShow=false
        this.ShowFinalInterventionThird=true
    }
    ESIList(){
        this.ShowESI=true;
    }
    getPsychologicalconditionsTrue(){
        this.PsychologicalconditionsValue="نیاز به مداخله"
        this.PsychologicalconditionsID=1
    }
    getPsychologicalconditionsFalse(){
        this.PsychologicalconditionsValue="عدم نیاز به مداخله";
        this.PsychologicalconditionsID=2
    }
    getPsychologicalconditionsNone(){
        this.PsychologicalconditionsValue="ارزیابی نشده";
        this.PsychologicalconditionsID=3
    }
    getEconomicSituationTrue(){
        this.EconomicSituationValue="نیاز به مداخله"
        this.EconomicSituationID=1
    }
    getEconomicSituationFalse(){
        this.EconomicSituationValue="عدم نیاز به مداخله"
        this.EconomicSituationID=2
    }
    getEconomicSituationNone(){
        this.EconomicSituationValue="ارزیابی نشده";
        this.EconomicSituationID=3
    }
    getDisorderTrue(){
        this.DisorderValue="نیاز به مداخله";
        this.DisorderID=1
    }
    getDisorderFalse(){
        this.DisorderValue="عدم نیاز به مداخله";
        this.DisorderID=2
    }
    getDisorderNone(){
        this.DisorderValue="ارزیابی نشده";
        this.DisorderID=3
    }
    getLegalTrue(){
        this.LegalValue="نیاز به مداخله";
        this.LegalID=1
    }
    getLegalFalse(){
        this.LegalValue="عدم نیاز به مداخله";
        this.LegalID=2
    }
    getLegalNone(){
        this.LegalValue="ارزیابی نشده";
        this.LegalID=3
    }
    getEffectiveCompanion(value:any,score:any){
        this.ShowEffectiveCompanion=false;
        this.EffectiveCompanionScore=score;
        this.finalScore=this.finalScore + this.EffectiveCompanionScore;
        this.EffectiveCompanionInput=value;
        if (this.finalScore>14){
            this.Level="الویت اول ";
            this.color=1;
            console.log(this.color)
        } if (this.finalScore>9 && this.finalScore<15){
            this.Level="الویت سوم"
            this.color=2
        } if (this.finalScore>6 && this.finalScore<10){
            this.Level="الویت سوم "
            this.color=3
        }if (this.finalScore>2 && this.finalScore<7){
            this.Level="الویت چهارم"
            this.color=4
        }
    }
    getESI(value:any,score:any){
        this.ShowESI=false;
        this.ESIScore=score;
        this.ESIInput=value;
        this.finalScore=this.finalScore + this.ESIScore;
        if (this.finalScore>14){
            this.Level="الویت اول ";
            this.color=1;
            console.log(this.color)
        } if (this.finalScore>9 && this.finalScore<15){
            this.Level="الویت سوم"
            this.color=2
        } if (this.finalScore>6 && this.finalScore<10){
            this.Level="الویت سوم "
            this.color=3
        }if (this.finalScore>2 && this.finalScore<7){
            this.Level="الویت چهارم"
            this.color=4
        }
    }
    getSupportNetwork(value:any,code:any){
        this.netwokSuport=value
        // this.supportNetworkInput.push(this.netwokSuport);
        this.supportNetworkCode=code;
        this.ShowSupportNetwork=false;
        //
        let customOBj2=new DangerGroup();
        customOBj2.value=this.netwokSuport;
        this.supportNetworkInput.push(this.netwokSuport);
    }
    getInsurancecoverage(value:any,score:any){
        this.ShowInsurancecoverage=false;
        this.InsurancecoverageScore=score;
        this.InsurancecoverageInput=value;
        this.finalScore=this.finalScore + this.InsurancecoverageScore;
        if (this.finalScore>14){
            this.Level="الویت اول ";
            this.color=1;
            console.log(this.color)
        } if (this.finalScore>9 && this.finalScore<15){
            this.Level="الویت سوم"
            this.color=2
        } if (this.finalScore>6 && this.finalScore<10){
            this.Level="الویت سوم "
            this.color=3
        }if (this.finalScore>2 && this.finalScore<7){
            this.Level="الویت چهارم"
            this.color=4
        }
    }
    removeDanger(index){
        console.log(index)
        this.dangerInput.splice(index,1);
        this.dangerScore=0;
        this.finalScore=this.finalScore  - 15;
        console.log(this.finalScore);
        this.showDanger=false;
        console.log(this.showDanger)
    }
    removeDanger2(index){
        this.dangerInput2.splice(index,1);
    }
    removeFinalInterventionsecond(index){
        this.FinalInterventionSecondArray.splice(index,1);
    }
    removeFinalInterventionThird(index){
        this.FinalInterventionThirdArray.splice(index,1)
    }
    removeInterventionItem(index){
        this.InterventionArray.splice(index,1);
    }
    removeInterventionAll(){
        this.InterventionArray=[]
        this.ShowIntervention=false
    }
    removeFinalInterventionSecondAll(){
        this.FinalInterventionSecondArray=[];
        this.ShowFinalInterventionSecond=false
    }
    removeFinalInterventionThirdAll(){
        this.FinalInterventionThirdArray=[];
        this.ShowFinalInterventionThird=false
    }
    removeDangerAll(){
        this.dangerInput=[]
        this.showDanger=false;
        this.finalScore= this.finalScore - (this.dangerLenght *15);
    }
    removeDangerAll2(){
        this.dangerInput2=[];
        this.showDanger2=false
    }
    removeFinalInterventionFirst(index){
        this.FinalInterventionFirstArray.splice(index,1);
    }
    removeFinalInterventionFirstAll(){
        this.FinalInterventionFirstArray=[];
        this.ShowFinalInterventionFirst=false
        this.eghdamatShow=true
    }
    getDangerItem(value:any,score:any){
       this.dangerScore=score;
        this.finalScore=20;
        this.dangerValue=value;
        let customObj2 = new DangerGroup();
        customObj2.value=this.dangerValue;
        this.dangerInput.push(customObj2);
        console.log(this.dangerInput.length);
        this.dangerLenght=this.dangerInput.length
        this.showDanger=false;
        if (this.finalScore>14){
            this.Level="الویت اول ";
            this.color=1;
            console.log(this.color)
        } if (this.finalScore>9 && this.finalScore<15){
            this.Level="الویت سوم"
            this.color=2
        } if (this.finalScore>6 && this.finalScore<10){
            this.Level="الویت سوم "
            this.color=3
        }if (this.finalScore>2 && this.finalScore<7){
            this.Level="الویت چهارم"
            this.color=4
        }
    }
    getFinalInterventionFirst(value:any){
        this.FinalInterventionFirstValue=value;
        let customObj2 = new DangerGroup();
        customObj2.value=this.FinalInterventionFirstValue;
        this.FinalInterventionFirstArray.push(customObj2);
        console.log(this.FinalInterventionFirstArray)
        this.ShowFinalInterventionFirst=false
    }
    getFinalInterventionThird(value:any){
         this.FinalInterventionThirdValue=value;
        let customObj4 = new DangerGroup();
        customObj4.value=this.FinalInterventionThirdValue;
        this.FinalInterventionThirdArray.push(customObj4);
        console.log(this.FinalInterventionFirstArray)
        this.ShowFinalInterventionThird=false
    }
    getFinalInterventionsecond(value){
        this.FinalInterventionSecondValue=value;
        let customObj3 = new DangerGroup();
        customObj3.value=this.FinalInterventionSecondValue;
        this.FinalInterventionSecondArray.push(customObj3);
        this.ShowFinalInterventionSecond=false
    }
    getDangerItem2(value:any){
        this.dangerValue2=value;
        console.log(this.dangerValue2)
        let customOBj=new DangerGroup();
        customOBj.value=this.dangerValue2;
        this.dangerInput2.push(this.dangerValue2);
        console.log(this.dangerInput2)
        this.showDanger2=false
    }
    getTargetItem(id,value){
        this.id=id;
        this.targetItemInputValue=value;
        this.showGruopMain=false;
        this.showChildAbouse=true;
        let obj=new targetArray();
        obj.targetvalue=this.targetItemInputValue;
        obj.targetCOde=this.id;
        this.array1.push(obj)
        console.log(this.array1)
    }
    getIntervention(value:any,code:any , id:number){
        this.Interventioncode=code;
        this.InterventionValue=value
        let customObj3 = new modakhele();
        customObj3.value=this.InterventionValue;
        customObj3.id=id;
        this.InterventionArray.push( customObj3);
        this.data.push(this.InterventionArray);
        console.log(this.data);
        console.log(this.InterventionArray);
        this.ShowIntervention=false;
    }
    showdangerList(){
        this.showDanger=true
    }
    ShowInterventionList(i :number){
        this.ShowIntervention=true
    }
    showdangerList2(){
        this.showDanger2=true
    }
 patinetHasRelatieve(){
    this.hasRelative=true
 }
    patinetDosentHasRelatieve(){
        this.hasRelative=false
    }
    openRandModal(content){
        this.dangerInput2=[];
        this.numberofarrayY=this.numberofarrayY+1;
        console.log(this.numberofarrayY)
        console.log(this.dangerInput2);
        this.PsychologicalconditionsValue='';
        this.PsychologicalconditionsID=null;
        this.EconomicSituationID=null;
        this.EconomicSituationValue='';
        this.DisorderValue='';
        this.LegalValue='';
        this.DisorderID=null;
        this.LegalID=null;
        this.SummeryText=''
        this.modalService.open(content, { size: 'lg' ,backdrop:'static',keyboard  : false}).result.then((result) => {
        }, (reason) => {
        });
    }
    edit(index,content){
       let arrau=this.dataRand.filter(x=>x.id===index);
       for(let i of arrau){
           console.log(i)
          this.dangerInput2=i.valueDanger;
       
       }
       this.modalService.open(content, { size: 'lg' ,backdrop:'static',keyboard  : false}).result.then((result) => {
    }, (reason) => {
    });
    }
    add(){
        this.dataRand.push({'valueDanger':this.dangerInput2,'hemayati':this.supportNetworkInput,'id':this.numberofarrayY-1,'summery':this.SummeryText
            ,'ghanoon':this.LegalValue,'ekhtelal':this.DisorderValue,'Eghtesadi':this.EconomicSituationValue,'ravani':this.PsychologicalconditionsValue,
            'active':this.Active
        })
        console.log(this.dataRand)
        this.arraaaay.push(this.dataRand)
        // console.log(this.arraaaay)
        // console.log(this.dangerInput2)
        this.array.push(this.dangerInput2,);
        this.dangerInput2=[];
        this.supportNetworkInput=[]
        // console.log(this.array);
        // this.dangerInput2=[]
        // console.log(this.arraaaay);
        this.containers.push({'div':this.containers.length,'active':this.Active});
        // console.log(this.containers)
        console.log(this.containers)
        this.modalService.dismissAll();
        this.ShowRand=false;


    }
    addToTarget(){
        this.TargetArray.push(this.TargetArray.length)
        this.Targetnumberofarray=this.Targetnumberofarray+1;
        
    }
    addIntervention(){
        this.InterventionContainer.push(this.InterventionContainer.length)
        console.log(this.InterventionContainer.length)
       this.numberofarray=this.numberofarray+1;
    }
    removeIntervention(index){
        this.InterventionContainer.splice(index,1);
        if(this.numberofarray >0){
            this.numberofarray = this.numberofarray -1;
        }
    }
    isHasFaloowUp(){
      this.hasFallowUp=true
    }
    HasnotFallowUp(){
      this.hasFallowUp=false
    }
    hasSuppoort(){
      this.hasSuppoortOK=true
    }
    hasNotSuppoort(){
        this.hasSuppoortOK=false
    }
    grayClass(i){

        console.log(i)
        i.active=true;
        console.log(i.active)

        // this.dataRand.forEach(item=>{
        //     console.log(item.id)
        //     if (item.id==index){
        //         this.colorID=item.id;
        //         console.log('ColorId',this.colorID)
        //
        //
        //     }
        //
        // })



    }
    isSelected(){



    }
    getChildAbouseDate(code,persent,value){
        this.code=code;
        this.persent=persent;
        this.TargetInputValue=value;
        console.log(this.TargetInputValue)
        this.showChildAbouse=false;
        let obj=new targetArray();
        obj.childValue=this.TargetInputValue;
        obj.childCode=this.code;
        this.array1.unshift(obj);
        console.log(this.array1)
    }
    ngOnInit() {
       this.finalTime=(this.time.getHours() +1) + ":"+ this.time.getMinutes() + ":" +  this.time.getSeconds()
        this.CaseworkerId=localStorage.getItem('caseWorkerId')
        this._service.getPatientByID(this.CaseworkerId).subscribe(res=>{
            this.info=res
            console.log(res)
        })
  }
}
