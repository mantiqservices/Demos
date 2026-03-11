// All constants extracted from original app

export const MODULES = { LANDING:'landing', CRM:'crm', SALES:'sales', HR:'hr', FINANCE:'finance', ACADEMY:'academy' };

export const UI_TEXT = {
  en: {
    subtitle:"For Business Services Demos",
    description:"All Systems can be customized based on your Budget, Needs, Operation of your Department, Users and your data size.",
    launch:"Demo",dashboard:"Dashboard",controlCenter:"Control Center",
    active:"Active",growth:"Growth",volume:"Volume",assets:"Assets",status:"Status",
    verified:"Verified",demoEnv:"Demo Environment",search:"Global search...",
    export:"Export",addRecord:"Add Record",cancel:"Cancel",confirm:"Confirm",
    syncing:"Syncing",returnHome:"Return Home",restricted:"Security: Restricted action.",
    blocked:"Security Protocol: Developer Access Blocked.",role:"Super Admin",
    action:"Action",submit:"Submit Data",analytics:"Analytics",overview:"Overview",trends:"Trends"
  },
  ar: {
    subtitle:"لخدمات الأعمال",
    description:"انظمة لادارة اقسام شركتك بدقة وكفاءة عالية.",
    launch:"لرؤية عينة",dashboard:"لوحة القيادة",controlCenter:"مركز التحكم",
    active:"نشط",growth:"النمو",volume:"الحجم",assets:"الأصول",status:"الحالة",
    verified:"تم التحقق",demoEnv:"بيئة العرض",search:"بحث شامل...",
    export:"سحب البيانات",addRecord:"إضافة سجل",cancel:"إلغاء",confirm:"تأكيد",
    syncing:"جاري المزامنة",returnHome:"العودة للرئيسية",restricted:"أمن: إجراء مقيد.",
    blocked:"بروتوكول أمن: تم حظر وصول المطورين.",role:"مدير نظام",
    action:"الإجراء",submit:"إرسال البيانات",analytics:"التحليلات",overview:"نظرة عامة",trends:"الاتجاهات"
  }
};

export const LEAD_STAGES = [
  { id:'new',       label:{en:'New',ar:'جديد'},             color:'#38bdf8', bg:'rgba(56,189,248,0.1)',  darkBg:'rgba(56,189,248,0.08)',  icon:'inbox',       next:'contacted', prev:null },
  { id:'contacted', label:{en:'Contacted',ar:'تم التواصل'}, color:'#818cf8', bg:'rgba(129,140,248,0.1)', darkBg:'rgba(129,140,248,0.08)', icon:'phone-call',  next:'qualified', prev:'new' },
  { id:'qualified', label:{en:'Qualified',ar:'مؤهل'},       color:'#fb923c', bg:'rgba(251,146,60,0.1)',  darkBg:'rgba(251,146,60,0.08)',  icon:'check-circle',next:'proposal',  prev:'contacted' },
  { id:'proposal',  label:{en:'Proposal',ar:'عرض سعر'},     color:'#f472b6', bg:'rgba(244,114,182,0.1)', darkBg:'rgba(244,114,182,0.08)', icon:'file-text',   next:'won',       prev:'qualified' },
  { id:'won',       label:{en:'Won ✓',ar:'تم الفوز ✓'},     color:'#34d399', bg:'rgba(52,211,153,0.1)',  darkBg:'rgba(52,211,153,0.08)',  icon:'trophy',      next:null,        prev:'proposal' },
  { id:'lost',      label:{en:'Lost',ar:'خسارة'},            color:'#f87171', bg:'rgba(248,113,113,0.1)', darkBg:'rgba(248,113,113,0.08)', icon:'x-circle',    next:null,        prev:'proposal' }
];
