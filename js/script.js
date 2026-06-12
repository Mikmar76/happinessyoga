(function() {
  'use strict';

  const translations = {
    ru: {
      site_title: 'Йога Счастья',
      header_logo: 'Йога Счастья',
      nav_about: 'О нас',
      nav_instructor: 'Преподаватель',
      nav_schedule: 'Расписание',
      nav_pricing: 'Цены',
      nav_gallery: 'Галерея',
      nav_faq: 'FAQ',
      nav_contact: 'Контакты',
      hero_title: 'Йога Счастья',
      hero_subtitle: 'Обрети гармонию тела и духа',
      hero_cta: 'Записаться',
      about_title: 'О хатха-йоге',
      about_p1: 'Хатха-йога — это древняя практика, объединяющая физические асаны, дыхательные техники (пранаяму) и медитацию. Это фундаментальное направление йоги, которое подготавливает тело и ум к более глубоким практикам.',
      about_p2: 'Наша студия предлагает занятия для всех уровней подготовки — от новичков до опытных практикующих. Мы делаем акцент на правильном выравнивании, осознанном дыхании и индивидуальном подходе к каждому ученику.',
      about_p3: 'Регулярная практика хатха-йоги улучшает гибкость, укрепляет мышцы, снижает стресс и наполняет энергией.',
      instructor_title: 'Преподаватель',
      instructor_name: 'Табачкова Олеся',
      instructor_badge: 'Сертифицированный инструктор хатха-йоги',
      instructor_p1: 'Опытный преподаватель хатха-йоги с глубоким пониманием традиционных практик и современного подхода к обучению.',
      instructor_p2: 'Олеся Владимировна помогает ученикам раскрыть потенциал тела и ума через мягкую, осознанную практику, уделяя внимание выравниванию и дыханию.',
      schedule_title: 'Расписание',
      schedule_sub: 'Выберите дату, чтобы увидеть доступные занятия',
      schedule_placeholder: 'Выберите дату в календаре',
      pricing_title: 'Абонементы',
      price_1_title: 'Разовое занятие',
      price_1_f1: '1 занятие',
      price_1_f2: 'Любое направление',
      price_1_f3: 'Коврик в подарок',
      price_2_title: '4 занятия',
      price_2_f1: '4 занятия',
      price_2_f2: 'Срок действия — месяц',
      price_2_f3: 'Экономия 400 ₽',
      price_3_title: '8 занятий',
      price_3_f1: '8 занятий',
      price_3_f2: 'Срок действия — 2 месяца',
      price_3_f3: 'Экономия 1 200 ₽',
      price_4_title: 'Безлимит на месяц',
      price_4_f1: 'Неограниченно',
      price_4_f2: 'Все направления',
      price_4_f3: 'Запись без ограничений',
      price_btn: 'Записаться',
      price_popular: 'Популярное',
      gallery_title: 'Галерея',
      testimonials_title: 'Отзывы',
      testimonial_1: '"Йога Счастья стала моим вторым домом. После месяца занятий я почувствовала невероятную лёгкость в теле и спокойствие в уме. Анна — чуткий и профессиональный преподаватель."',
      testimonial_1_a: '— Елена, 34 года',
      testimonial_2: '"Начал заниматься с нуля после рекомендации врача. Через 3 месяца забыл о боли в спине. Очень рад, что нашёл эту студию. Рекомендую всем!"',
      testimonial_2_a: '— Дмитрий, 42 года',
      testimonial_3: '"Хожу на занятия уже полгода. Ушла тревожность, появилась энергия и уверенность в себе. Атмосфера в студии невероятно поддерживающая и тёплая."',
      testimonial_3_a: '— Мария, 28 лет',
      faq_title: 'Частые вопросы',
      faq_q1: 'Нужна ли предварительная подготовка?',
      faq_a1: 'Нет, наши занятия подходят для любого уровня подготовки. Преподаватель адаптирует практику под каждого ученика, предлагая облегчённые и усложнённые варианты асан.',
      faq_q2: 'Что взять с собой на занятие?',
      faq_a2: 'Удобную одежду, не стесняющую движений. Коврики и всё необходимое оборудование предоставляется студией. Также рекомендуется взять бутылочку воды.',
      faq_q3: 'Есть ли противопоказания?',
      faq_a3: 'При серьёзных заболеваниях опорно-двигательного аппарата, сердечно-сосудистой системы или обострениях хронических заболеваний перед началом занятий рекомендуется проконсультироваться с врачом. Предупредите преподавателя о любых особенностях здоровья.',
      faq_q4: 'Как часто нужно заниматься?',
      faq_a4: 'Оптимально — 2-4 раза в неделю. Регулярность важнее интенсивности. Даже 2 занятия в неделю дадут заметный результат через месяц.',
      faq_q5: 'Можно ли заморозить абонемент?',
      faq_a5: 'Да, вы можете заморозить абонемент на срок до 30 дней в случае болезни или отпуска. Просто предупредите нас заранее.',
      blog_title: 'Блог о йоге',
      blog_1_date: '12 мая 2026',
      blog_1_title: '5 простых асан для утренней практики',
      blog_1_excerpt: 'Начните день с энергии — всего 15 минут помогут проснуться и настроиться на продуктивный день.',
      blog_2_date: '28 апреля 2026',
      blog_2_title: 'Пранаяма: дыхание жизни',
      blog_2_excerpt: 'Освойте базовые дыхательные техники, чтобы управлять стрессом и повышать концентрацию.',
      blog_3_date: '10 апреля 2026',
      blog_3_title: 'Как йога меняет тело за месяц',
      blog_3_excerpt: 'Реальные изменения, которые вы заметите уже через 4 недели регулярных занятий хатха-йогой.',
      contact_title: 'Контакты',
      contact_address: 'г. Москва, ул. Тверская, 15, офис 304',
      form_title: 'Записаться на занятие',
      form_name: 'Ваше имя',
      form_phone: 'Телефон',
      form_email: 'Email',
      form_options: 'Выберите направление',
      form_option_select: 'Выберите направление',
      form_option_morning: 'Утренняя хатха',
      form_option_evening: 'Вечерняя хатха',
      form_option_private: 'Индивидуальное занятие',
      form_message: 'Комментарий',
      form_submit: 'Отправить',
      footer_copy: 'Йога Счастья',
      schedule_empty: 'Нет занятий на эту дату'
    },
    en: {
      site_title: 'Yoga of Happiness',
      header_logo: 'Yoga of Happiness',
      nav_about: 'About',
      nav_instructor: 'Instructor',
      nav_schedule: 'Schedule',
      nav_pricing: 'Pricing',
      nav_gallery: 'Gallery',
      nav_faq: 'FAQ',
      nav_contact: 'Contact',
      hero_title: 'Yoga of Happiness',
      hero_subtitle: 'Find harmony of body and soul',
      hero_cta: 'Book a class',
      about_title: 'About Hatha Yoga',
      about_p1: 'Hatha yoga is an ancient practice combining physical asanas, breathing techniques (pranayama), and meditation. It is the foundational branch of yoga that prepares the body and mind for deeper practices.',
      about_p2: 'Our studio offers classes for all levels — from beginners to experienced practitioners. We emphasize proper alignment, conscious breathing, and an individual approach to each student.',
      about_p3: 'Regular hatha yoga practice improves flexibility, strengthens muscles, reduces stress, and fills you with energy.',
      instructor_title: 'Instructor',
      instructor_name: 'Olesia Tabachkova',
      instructor_badge: 'Certified Hatha Yoga Instructor',
      instructor_p1: 'Experienced hatha yoga teacher with deep knowledge of traditional practices and a modern approach to teaching.',
      instructor_p2: 'Olesia helps students unlock the potential of body and mind through gentle, mindful practice with focus on alignment and breath.',
      schedule_title: 'Schedule',
      schedule_sub: 'Select a date to see available classes',
      schedule_placeholder: 'Select a date on the calendar',
      pricing_title: 'Pricing',
      price_1_title: 'Single Class',
      price_1_f1: '1 class',
      price_1_f2: 'Any style',
      price_1_f3: 'Free yoga mat',
      price_2_title: '4 Classes',
      price_2_f1: '4 classes',
      price_2_f2: 'Valid for 1 month',
      price_2_f3: 'Save 400 ₽',
      price_3_title: '8 Classes',
      price_3_f1: '8 classes',
      price_3_f2: 'Valid for 2 months',
      price_3_f3: 'Save 1 200 ₽',
      price_4_title: 'Monthly Unlimited',
      price_4_f1: 'Unlimited classes',
      price_4_f2: 'All styles',
      price_4_f3: 'No booking limits',
      price_btn: 'Book now',
      price_popular: 'Popular',
      gallery_title: 'Gallery',
      testimonials_title: 'Testimonials',
      testimonial_1: '"Yoga of Happiness became my second home. After a month of practice I felt incredible lightness in my body and peace of mind. Anna is a caring and professional teacher."',
      testimonial_1_a: '— Elena, 34 years',
      testimonial_2: '"Started from scratch on my doctor\'s recommendation. After 3 months my back pain was gone. So glad I found this studio. Highly recommend!"',
      testimonial_2_a: '— Dmitry, 42 years',
      testimonial_3: '"I\'ve been coming for half a year. My anxiety is gone, I have energy and confidence. The studio atmosphere is incredibly supportive and warm."',
      testimonial_3_a: '— Maria, 28 years',
      faq_title: 'FAQ',
      faq_q1: 'Do I need prior experience?',
      faq_a1: 'No, our classes are suitable for all levels. The instructor adapts the practice to each student, offering both gentler and more challenging variations of asanas.',
      faq_q2: 'What should I bring?',
      faq_a2: 'Comfortable, stretchy clothing. Mats and all necessary equipment are provided by the studio. It is also recommended to bring a water bottle.',
      faq_q3: 'Are there any contraindications?',
      faq_a3: 'If you have serious musculoskeletal conditions, cardiovascular issues, or chronic illness flare-ups, please consult your doctor before starting. Inform your instructor of any health concerns.',
      faq_q4: 'How often should I practice?',
      faq_a4: 'Ideally 2-4 times per week. Consistency matters more than intensity. Even 2 classes per week will show noticeable results after a month.',
      faq_q5: 'Can I freeze my membership?',
      faq_a5: 'Yes, you can freeze your membership for up to 30 days in case of illness or vacation. Just let us know in advance.',
      blog_title: 'Yoga Blog',
      blog_1_date: 'May 12, 2026',
      blog_1_title: '5 Simple Asanas for Morning Practice',
      blog_1_excerpt: 'Start your day with energy — just 15 minutes will help you wake up and set yourself up for a productive day.',
      blog_2_date: 'April 28, 2026',
      blog_2_title: 'Pranayama: The Breath of Life',
      blog_2_excerpt: 'Master basic breathing techniques to manage stress and improve concentration.',
      blog_3_date: 'April 10, 2026',
      blog_3_title: 'How Yoga Changes Your Body in a Month',
      blog_3_excerpt: 'Real changes you will notice after just 4 weeks of regular hatha yoga practice.',
      contact_title: 'Contact',
      contact_address: '15 Tverskaya St, office 304, Moscow',
      form_title: 'Book a Class',
      form_name: 'Your name',
      form_phone: 'Phone',
      form_email: 'Email',
      form_options: 'Select class type',
      form_option_select: 'Select class type',
      form_option_morning: 'Morning Hatha',
      form_option_evening: 'Evening Hatha',
      form_option_private: 'Private session',
      form_message: 'Comment',
      form_submit: 'Send',
      footer_copy: 'Yoga of Happiness',
      schedule_empty: 'No classes on this date'
    }
  };

  const dayNamesRu = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNamesRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const scheduleData = {};

  function seedSchedule() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const times = [
      { ru: 'Утренняя хатха', en: 'Morning Hatha' },
      { ru: 'Дневная хатха', en: 'Day Hatha' },
      { ru: 'Вечерняя хатха', en: 'Evening Hatha' }
    ];

    for (let d = 1; d <= 28; d++) {
      const date = new Date(year, month, d);
      if (date.getDay() === 0 || date.getDay() === 6) continue;

      const key = formatDateKey(date);
      const numClasses = Math.random() > 0.4 ? (Math.random() > 0.5 ? 2 : 1) : 0;

      if (numClasses === 0) continue;

      scheduleData[key] = [];
      const morning = date.getHours() < 12;
      if (numClasses >= 1) {
        scheduleData[key].push({
          time: morning ? '09:00' : '18:00',
          title: times[0],
          instructor: 'Анна'
        });
      }
      if (numClasses >= 2) {
        scheduleData[key].push({
          time: '19:30',
          title: times[2],
          instructor: 'Анна'
        });
      }
    }
  }

  function formatDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  let currentLang = 'ru';
  let calendarDate = new Date();
  let selectedDate = null;
  let currentSlide = 0;

  const langBtns = document.querySelectorAll('.header__lang-btn');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const calendarEl = document.getElementById('calendar');
  const scheduleList = document.getElementById('scheduleList');
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselDots = document.getElementById('carouselDots');
  const accordion = document.getElementById('accordion');
  const contactForm = document.getElementById('contactForm');

  let galleryImages = [];
  let currentImageIndex = 0;
  let carouselInterval = null;
  let slides = [];

  function applyTranslation(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key]) el.placeholder = t[key];
    });

    const select = document.querySelector('.contact__select');
    if (select) {
      const optKey = select.dataset.i18nOptions || 'form_options';
      select.querySelectorAll('option').forEach(opt => {
        const optKey = opt.dataset.i18n;
        if (t[optKey]) opt.textContent = t[optKey];
      });
    }

    langBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    applyTranslation(lang);
    renderCalendar();
    if (selectedDate) showClassesForDate(selectedDate);
  }

  function renderCalendar() {
    if (!calendarEl) return;

    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const today = new Date();
    const monthNames = currentLang === 'ru' ? monthNamesRu : monthNamesEn;
    const dayNames = currentLang === 'ru' ? dayNamesRu : dayNamesEn;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    let html = `
      <div class="calendar__header">
        <div class="calendar__title">${monthNames[month]} ${year}</div>
        <div class="calendar__nav">
          <button class="calendar__nav-btn" data-cal-nav="-1">&lsaquo;</button>
          <button class="calendar__nav-btn" data-cal-nav="1">&rsaquo;</button>
        </div>
      </div>
      <div class="calendar__weekdays">
        ${dayNames.map(d => `<div class="calendar__weekday">${d}</div>`).join('')}
      </div>
      <div class="calendar__days">
    `;

    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
      let dayNum, isOther = false;

      if (i < firstDay) {
        dayNum = daysInPrevMonth - firstDay + i + 1;
        isOther = true;
      } else if (i >= firstDay + daysInMonth) {
        dayNum = i - firstDay - daysInMonth + 1;
        isOther = true;
      } else {
        dayNum = i - firstDay + 1;
      }

      const currentDate = new Date(year, month, dayNum);
      const key = formatDateKey(currentDate);
      const isToday = currentDate.toDateString() === today.toDateString();
      const isSelected = selectedDate && currentDate.toDateString() === selectedDate.toDateString();
      const hasClass = !!scheduleData[key];

      let cls = 'calendar__day';
      if (isOther) cls += ' calendar__day--other';
      if (isToday) cls += ' calendar__day--today';
      if (isSelected) cls += ' calendar__day--selected';
      if (hasClass && !isOther) cls += ' calendar__day--has-class';

      html += `<div class="${cls}" data-date="${key}">${dayNum}</div>`;
    }

    html += '</div>';
    calendarEl.innerHTML = html;

    calendarEl.querySelectorAll('[data-cal-nav]').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        calendarDate.setMonth(calendarDate.getMonth() + parseInt(this.dataset.calNav));
        renderCalendar();
      });
    });

    calendarEl.querySelectorAll('.calendar__day:not(.calendar__day--other)').forEach(day => {
      day.addEventListener('click', function() {
        const dateStr = this.dataset.date;
        if (!dateStr) return;
        const parts = dateStr.split('-');
        selectedDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        renderCalendar();
        showClassesForDate(selectedDate);
      });
    });
  }

  function showClassesForDate(date) {
    if (!scheduleList) return;
    const key = formatDateKey(date);
    const classes = scheduleData[key];
    const t = translations[currentLang];

    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateLabel = date.toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : 'en-US', options);

    let html = `<div class="schedule__date-label">${dateLabel}</div>`;

    if (!classes || classes.length === 0) {
      html += `<p class="schedule__placeholder">${t.schedule_empty || 'Нет занятий на эту дату'}</p>`;
    } else {
      classes.forEach(cls => {
        const title = currentLang === 'ru' ? cls.title.ru : cls.title.en;
        html += `
          <div class="schedule__item">
            <span class="schedule__item-time">${cls.time}</span>
            <span class="schedule__item-title">${title}</span>
            <span class="schedule__item-instructor">${cls.instructor}</span>
          </div>
        `;
      });
    }

    scheduleList.innerHTML = html;
  }

  function initGallery() {
    if (!galleryGrid) return;
    galleryImages = galleryGrid.querySelectorAll('img');
    const items = galleryGrid.querySelectorAll('.gallery__item');

    items.forEach((item, index) => {
      item.addEventListener('click', function() {
        currentImageIndex = index;
        openLightbox(index);
      });
    });
  }

  function openLightbox(index) {
    if (!lightbox || !galleryImages[index]) return;
    lightboxImg.src = galleryImages[index].src;
    currentImageIndex = index;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function navigateLightbox(dir) {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex + dir + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex].src;
  }

  function initCarousel() {
    if (!carouselTrack || !carouselDots) return;
    slides = carouselTrack.querySelectorAll('.carousel__slide');

    if (slides.length === 0) return;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel__dot' + (i === 0 ? ' is-active' : '');
      dot.addEventListener('click', () => goToSlide(i));
      carouselDots.appendChild(dot);
    });

    startCarouselAuto();

    let startX = 0;
    let isDragging = false;

    carouselTrack.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      stopCarouselAuto();
    }, { passive: true });

    carouselTrack.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
      }
      isDragging = false;
      startCarouselAuto();
    }, { passive: true });

    carouselTrack.addEventListener('mouseenter', stopCarouselAuto);
    carouselTrack.addEventListener('mouseleave', startCarouselAuto);
  }

  function goToSlide(index) {
    if (!slides.length) return;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;

    carouselTrack.style.transform = `translateX(-${index * 100}%)`;

    const dots = carouselDots.querySelectorAll('.carousel__dot');
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }

  function startCarouselAuto() {
    stopCarouselAuto();
    carouselInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  }

  function stopCarouselAuto() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      carouselInterval = null;
    }
  }

  function initAccordion() {
    if (!accordion) return;
    accordion.querySelectorAll('.accordion__trigger').forEach(trigger => {
      trigger.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isOpen = this.classList.contains('is-open');

        accordion.querySelectorAll('.accordion__trigger').forEach(t => {
          t.classList.remove('is-open');
          t.nextElementSibling.classList.remove('is-open');
        });

        if (!isOpen) {
          this.classList.add('is-open');
          content.classList.add('is-open');
        }
      });
    });
  }

  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section, .pricing__card, .blog__card, .instructor__card').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const btn = contactForm.querySelector('.contact__submit');
    const originalText = btn.textContent;
    if (currentLang === 'ru') {
      btn.textContent = 'Отправлено!';
    } else {
      btn.textContent = 'Sent!';
    }
    btn.style.background = '#7A9D8A';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 3000);
    contactForm.reset();
  }

  function init() {
    seedSchedule();
    setLanguage('ru');
    initGallery();
    initCarousel();
    initAccordion();
    initScrollAnimations();

    if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);

    langBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        setLanguage(this.dataset.lang);
      });
    });

    burger.addEventListener('click', function() {
      this.classList.toggle('is-active');
      nav.classList.toggle('is-open');
    });

    nav.querySelectorAll('.header__link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-active');
        nav.classList.remove('is-open');
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));

    lightbox.addEventListener('click', function(e) {
      if (e.target === this) closeLightbox();
    });

    document.addEventListener('keydown', function(e) {
      if (lightbox.classList.contains('is-open')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
