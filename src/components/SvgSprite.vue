<template>
  <svg class="svg-sprite" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <!--  иконки из icons8.ru-->
    <symbol id="pen"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.91 14.19 3.88 3.88m.252-.185 10.28-10.28a2 2 0 0 0 0-2.828L19.2 3.654a2 2 0 0 0-2.828 0L6.092 13.935a2.016 2.016 0 0 0-.364.497l-2.63 5.096c-.446.865.481 1.793 1.346 1.348l5.1-2.626c.184-.096.352-.218.498-.365Z"/>
    </symbol>
    <symbol id="vk" viewBox="0 0 32 32" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <path d="M28 24.6667C28 26.508 26.508 28 24.6667 28H7.33333C5.49267 28 4 26.508 4 24.6667V7.33333C4 5.492 5.49267 4 7.33333 4H24.6667C26.508 4 28 5.492 28 7.33333V24.6667Z" fill="#1976D2"/>
      <path d="M23.958 12.0273C23.9887 11.9266 24.0033 11.8333 23.9993 11.7499C23.9893 11.5086 23.8233 11.3333 23.4327 11.3333H21.6873C21.2467 11.3333 21.0433 11.5999 20.9247 11.8673C20.9247 11.8673 19.8367 14.1066 18.5827 15.5833C18.176 16.0106 17.9693 15.9999 17.7493 15.9999C17.6313 15.9999 17.3333 15.8573 17.3333 15.4659V12.0093C17.3333 11.5466 17.218 11.3333 16.8453 11.3333H13.746C13.4747 11.3333 13.3333 11.5466 13.3333 11.7606C13.3333 12.2053 13.932 12.3119 14 13.5579V15.9733C14 16.5599 13.898 16.6666 13.678 16.6666C13.0847 16.6666 11.9167 14.6666 11.1347 12.0453C10.9653 11.5293 10.796 11.3333 10.3553 11.3333H8.59333C8.08467 11.3333 8 11.5826 8 11.8493C8 12.3299 8.4 14.9286 10.5833 17.9166C12.1667 20.0833 14.2527 21.3333 16.0993 21.3333C17.218 21.3333 17.3327 21.0486 17.3327 20.6039V18.6226C17.3333 18.0886 17.4553 17.9999 17.8113 17.9999C18.0653 17.9999 18.5833 18.1666 19.5833 19.3333C20.7367 20.6786 20.946 21.3333 21.6073 21.3333H23.3527C23.758 21.3333 23.9907 21.1633 24 20.8333C24.002 20.7493 23.99 20.6553 23.9627 20.5506C23.8333 20.1666 23.24 19.2279 22.5 18.3333C22.09 17.8379 21.6853 17.3473 21.4993 17.0806C21.3747 16.9066 21.3273 16.7839 21.3333 16.6666C21.3393 16.5433 21.4033 16.4259 21.4993 16.2619C21.482 16.2619 23.738 13.0946 23.958 12.0273Z" fill="white"/>
    </symbol>
    <symbol id="single_choice" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <path d="M8.29163 8.99967H15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.04319 7.99791C5.5964 8.55112 5.5964 9.44787 5.04319 10.0011C4.48999 10.5543 3.59324 10.5543 3.04003 10.0011C2.48682 9.44787 2.48682 8.55112 3.04003 7.99791C3.59324 7.44471 4.48999 7.44471 5.04319 7.99791" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.29163 4.04167H15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.63916 3.69317L3.81004 4.74717L6.16666 2.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.29163 13.9587H15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.04319 12.9569C5.5964 13.5101 5.5964 14.4069 5.04319 14.9601C4.48999 15.5133 3.59324 15.5133 3.04003 14.9601C2.48682 14.4069 2.48682 13.5101 3.04003 12.9569C3.59324 12.4037 4.48999 12.4037 5.04319 12.9569" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="multiple_choice" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6666 5.45833H8.29159C7.90059 5.45833 7.58325 5.141 7.58325 4.75V3.33333C7.58325 2.94233 7.90059 2.625 8.29159 2.625H14.6666C15.0576 2.625 15.3749 2.94233 15.3749 3.33333V4.75C15.3749 5.141 15.0576 5.45833 14.6666 5.45833Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6666 10.4173H8.29159C7.90059 10.4173 7.58325 10.1 7.58325 9.70898V8.29232C7.58325 7.90132 7.90059 7.58398 8.29159 7.58398H14.6666C15.0576 7.58398 15.3749 7.90132 15.3749 8.29232V9.70898C15.3749 10.1 15.0576 10.4173 14.6666 10.4173Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6666 15.3743H8.29159C7.90059 15.3743 7.58325 15.057 7.58325 14.666V13.2493C7.58325 12.8583 7.90059 12.541 8.29159 12.541H14.6666C15.0576 12.541 15.3749 12.8583 15.3749 13.2493V14.666C15.3749 15.057 15.0576 15.3743 14.6666 15.3743Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 5.45833H3.33333C2.94233 5.45833 2.625 5.141 2.625 4.75V3.33333C2.625 2.94233 2.94233 2.625 3.33333 2.625H4.75C5.141 2.625 5.45833 2.94233 5.45833 3.33333V4.75C5.45833 5.141 5.141 5.45833 4.75 5.45833Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 10.4173H3.33333C2.94233 10.4173 2.625 10.1 2.625 9.70898V8.29232C2.625 7.90132 2.94233 7.58398 3.33333 7.58398H4.75C5.141 7.58398 5.45833 7.90132 5.45833 8.29232V9.70898C5.45833 10.1 5.141 10.4173 4.75 10.4173Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 15.3743H3.33333C2.94233 15.3743 2.625 15.057 2.625 14.666V13.2493C2.625 12.8583 2.94233 12.541 3.33333 12.541H4.75C5.141 12.541 5.45833 12.8583 5.45833 13.2493V14.666C5.45833 15.057 5.141 15.3743 4.75 15.3743Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="short_text" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_11274_29328)">
        <path d="M5.44479 11.1333H10.4226V12.5555H5.44479V11.1333ZM5.44479 8.28885H12.5559V9.71107H5.44479V8.28885ZM5.44479 5.4444H12.5559V6.86662H5.44479V5.4444ZM13.9781 2.59996H11.0057C10.707 1.77507 9.92479 1.17773 9.00034 1.17773C8.0759 1.17773 7.29367 1.77507 6.99501 2.59996H4.02256C3.92301 2.59996 3.83056 2.60707 3.73812 2.6284C3.46079 2.68529 3.2119 2.82751 3.0199 3.01951C2.8919 3.14751 2.78523 3.30396 2.71412 3.47462C2.64301 3.63818 2.60034 3.82307 2.60034 4.02218V13.9777C2.60034 14.1697 2.64301 14.3617 2.71412 14.5324C2.78523 14.7031 2.8919 14.8524 3.0199 14.9875C3.2119 15.1795 3.46079 15.3217 3.73812 15.3786C3.83056 15.3928 3.92301 15.4 4.02256 15.4H13.9781C14.7603 15.4 15.4003 14.76 15.4003 13.9777V4.02218C15.4003 3.23996 14.7603 2.59996 13.9781 2.59996ZM9.00034 2.42218C9.2919 2.42218 9.53367 2.66396 9.53367 2.95551C9.53367 3.24707 9.2919 3.48885 9.00034 3.48885C8.70879 3.48885 8.46701 3.24707 8.46701 2.95551C8.46701 2.66396 8.70879 2.42218 9.00034 2.42218ZM13.9781 13.9777H4.02256V4.02218H13.9781V13.9777Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_11274_29328">
          <rect width="17.0667" height="17.0667" fill="white" transform="translate(0.466553 0.466797)"/>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="pairs" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_10161_8622)">
        <rect width="17" height="17" transform="translate(0.5 0.5)" fill="none"/>
        <path d="M6.88204 10.418H1.91663V11.8346H6.88204V13.9596L9.70829 11.1263L6.88204 8.29297V10.418ZM11.1179 9.70964V7.58464H16.0833V6.16797H11.1179V4.04297L8.29163 6.8763L11.1179 9.70964Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_10161_8622">
          <rect width="17" height="17" fill="white" transform="translate(0.5 0.5)"/>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="matching_groups" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_10161_6467)">
        <path d="M5.44393 11.1333H10.4217V12.5555H5.44393V11.1333ZM5.44393 8.28885H12.555V9.71107H5.44393V8.28885ZM5.44393 5.4444H12.555V6.86662H5.44393V5.4444ZM13.9773 2.59996H11.0048C10.7062 1.77507 9.92393 1.17773 8.99949 1.17773C8.07504 1.17773 7.29282 1.77507 6.99415 2.59996H4.02171C3.92215 2.59996 3.82971 2.60707 3.73726 2.6284C3.45993 2.68529 3.21104 2.82751 3.01904 3.01951C2.89104 3.14751 2.78438 3.30396 2.71327 3.47462C2.64215 3.63818 2.59949 3.82307 2.59949 4.02218V13.9777C2.59949 14.1697 2.64215 14.3617 2.71327 14.5324C2.78438 14.7031 2.89104 14.8524 3.01904 14.9875C3.21104 15.1795 3.45993 15.3217 3.73726 15.3786C3.82971 15.3928 3.92215 15.4 4.02171 15.4H13.9773C14.7595 15.4 15.3995 14.76 15.3995 13.9777V4.02218C15.3995 3.23996 14.7595 2.59996 13.9773 2.59996ZM8.99949 2.42218C9.29104 2.42218 9.53282 2.66396 9.53282 2.95551C9.53282 3.24707 9.29104 3.48885 8.99949 3.48885C8.70793 3.48885 8.46615 3.24707 8.46615 2.95551C8.46615 2.66396 8.70793 2.42218 8.99949 2.42218ZM13.9773 13.9777H4.02171V4.02218H13.9773V13.9777Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_10161_6467">
          <rect width="17.0667" height="17.0667" fill="white" transform="translate(0.466675 0.466797)"/>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="detailed" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9179 9.29287L14.708 6.08301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.6666 12.9585V14.8752C19.6666 17.5215 17.5213 19.6668 14.8749 19.6668H9.12492C6.47855 19.6668 4.33325 17.5215 4.33325 14.8752V9.12516C4.33325 6.4788 6.47855 4.3335 9.12492 4.3335H11.0416" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6373 13.9178H11.0413C10.5121 13.9178 10.083 13.4887 10.083 12.9595V11.362C10.083 10.9426 10.2496 10.5404 10.5462 10.2438L15.7918 4.99919C16.6782 4.1129 18.1152 4.1129 19.0015 4.99919V4.99919C19.4272 5.42484 19.6664 6.00217 19.6664 6.60415C19.6664 7.20614 19.4272 7.78347 19.0015 8.20912L13.7553 13.4547C13.4588 13.7512 13.0566 13.9178 12.6373 13.9178V13.9178Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="sequence" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <path d="M2.90845 11.4085L5.45845 13.9585L8.00845 11.4085" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.45825 4.04183L5.45825 13.9585" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.0917 6.5918L12.5417 4.0418L9.9917 6.5918" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5417 13.9585L12.5417 4.04183" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="draggable-dots" viewBox="0 0 7 12" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <path d="M2.3 0.75H1.1C0.768688 0.75 0.5 1.08586 0.5 1.5V3C0.5 3.41414 0.768688 3.75 1.1 3.75H2.3C2.63131 3.75 2.9 3.41414 2.9 3V1.5C2.9 1.08586 2.63131 0.75 2.3 0.75ZM2.3 4.5H1.1C0.768688 4.5 0.5 4.83586 0.5 5.25V6.75C0.5 7.16414 0.768688 7.5 1.1 7.5H2.3C2.63131 7.5 2.9 7.16414 2.9 6.75V5.25C2.9 4.83586 2.63131 4.5 2.3 4.5ZM2.3 8.25H1.1C0.768688 8.25 0.5 8.58586 0.5 9V10.5C0.5 10.9141 0.768688 11.25 1.1 11.25H2.3C2.63131 11.25 2.9 10.9141 2.9 10.5V9C2.9 8.58586 2.63131 8.25 2.3 8.25ZM5.9 0.75H4.7C4.36869 0.75 4.1 1.08586 4.1 1.5V3C4.1 3.41414 4.36869 3.75 4.7 3.75H5.9C6.23131 3.75 6.5 3.41414 6.5 3V1.5C6.5 1.08586 6.23131 0.75 5.9 0.75ZM5.9 4.5H4.7C4.36869 4.5 4.1 4.83586 4.1 5.25V6.75C4.1 7.16414 4.36869 7.5 4.7 7.5H5.9C6.23131 7.5 6.5 7.16414 6.5 6.75V5.25C6.5 4.83586 6.23131 4.5 5.9 4.5ZM5.9 8.25H4.7C4.36869 8.25 4.1 8.58586 4.1 9V10.5C4.1 10.9141 4.36869 11.25 4.7 11.25H5.9C6.23131 11.25 6.5 10.9141 6.5 10.5V9C6.5 8.58586 6.23131 8.25 5.9 8.25Z" fill="currentColor"/>
    </symbol>
    <symbol id="telegram"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path fill="#29B6F6" d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Z"/>
      <path fill="#fff" d="m22.633 10-2.497 12.75s-.107.583-.83.583c-.384 0-.582-.182-.582-.182l-5.41-4.49-2.646-1.333-3.397-.903s-.604-.175-.604-.675c0-.417.622-.615.622-.615l14.21-5.646s.434-.156.751-.156c.195 0 .417.084.417.334 0 .166-.034.333-.034.333Z"/>
      <path fill="#B0BEC5" d="m15.333 20.337-2.284 2.249s-.099.077-.232.08a.33.33 0 0 1-.146-.029l.643-3.976 2.02 1.676Z"/>
      <path fill="#CFD8DC" d="M19.931 12.13a.333.333 0 0 0-.467-.061l-8.797 5.264s1.404 3.928 1.618 4.608c.214.68.386.697.386.697l.643-3.977 6.555-6.064a.333.333 0 0 0 .062-.466Z"/>
    </symbol>
    <symbol id="ok"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path fill="#FF9800" d="M28 24.667A3.301 3.301 0 0 1 24.667 28H7.333A3.301 3.301 0 0 1 4 24.667V7.333A3.301 3.301 0 0 1 7.333 4h17.334A3.301 3.301 0 0 1 28 7.333v17.334Z"/>
      <path fill="#fff" d="M17.933 20.267c1-.2 1.934-.6 2.734-1.134.666-.4.866-1.266.466-1.933a1.405 1.405 0 0 0-1.933-.467c-1.933 1.2-4.467 1.2-6.4 0-.667-.4-1.533-.2-1.933.467-.4.667-.2 1.533.466 1.933.867.534 1.8.934 2.734 1.134L11.4 22.933c-.533.534-.533 1.4 0 2 .267.267.6.4 1 .4a1.47 1.47 0 0 0 1-.4l2.6-2.6 2.6 2.6c.533.534 1.4.534 2 0 .533-.533.533-1.4 0-2l-2.667-2.666ZM16 6.667a4.638 4.638 0 0 0-4.667 4.666C11.333 13.933 13.4 16 16 16c2.6 0 4.667-2.067 4.667-4.667 0-2.6-2.067-4.666-4.667-4.666Zm0 6.666c-1.133 0-2-.866-2-2 0-1.133.867-2 2-2s2 .867 2 2c0 1.134-.867 2-2 2Z"/>
    </symbol>
    <symbol id="mail"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 8.984 4.205 1.834a1.999 1.999 0 0 0 1.593.002L17 9.002M7 4.5h10a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4Z"/>
    </symbol>
    <symbol id="communications"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.651 13.346c2.183 2.184 4.949 3.576 6.594 1.938l.399-.399a1.202 1.202 0 0 0-.159-1.839c-.389-.271-.807-.562-1.269-.887a1.213 1.213 0 0 0-1.549.127l-.451.448a9.67 9.67 0 0 1-1.626-1.322l-.002-.002a9.63 9.63 0 0 1-1.322-1.626l.448-.451a1.212 1.212 0 0 0 .126-1.55c-.325-.461-.616-.878-.885-1.266a1.201 1.201 0 0 0-1.84-.161l-.399.399C6.079 8.4 7.47 11.164 9.653 13.349M14 20l-2 2-2-2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-4Z"/>
    </symbol>
    <symbol id="pic_placeholder"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50">
      <mask id="a" width="50" height="50" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance">
        <path fill="#fff" d="M50 0H0v50h50V0Z"/>
      </mask>
      <g mask="url(#a)">
        <path fill="#BFC2C5" d="M42 0H8a8 8 0 0 0-8 8v34a8 8 0 0 0 8 8h34a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8Z"/>
        <path fill="#fff" d="m18 28.7 3.3-3.2c.3-.3.7-.3 1 0L25 28l4.1-4c.3-.4.8-.4 1 0l2 1.9V18H18v10.7Zm0 2.3v1h3l2.8-2.9-2-2-3.8 3.8v.1Zm14-3-2.5-2.4-6.4 6.5H32V28ZM17 16h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H17a1 1 0 0 1-1-1V17c0-.6.4-1 1-1Zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      </g>
    </symbol>
    <symbol id="user_photo_placeholder"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 160">
      <g clip-path="url(#a)">
        <path fill="#BFC2C5" d="M80 160.293c44.183 0 80-35.817 80-80 0-44.182-35.817-80-80-80s-80 35.818-80 80c0 44.183 35.817 80 80 80Z"/>
        <path fill="#fff" d="M106.667 53.002H96.1L90 46.377H70l-6.1 6.625H53.334c-3.667 0-6.667 2.981-6.667 6.625V99.38c0 3.643 3 6.625 6.666 6.625h53.334c3.666 0 6.666-2.982 6.666-6.625V59.627c0-3.644-3-6.625-6.666-6.625Zm0 46.377H53.333V59.627h13.5l6.1-6.625h14.134l6.1 6.625h13.5V99.38ZM80 62.939c-9.2 0-16.666 7.421-16.666 16.564S70.8 96.066 80 96.066s16.667-7.42 16.667-16.563C96.667 70.36 89.2 62.94 80 62.94Zm0 26.502c-5.5 0-10-4.472-10-9.938s4.5-9.938 10-9.938 10 4.472 10 9.938-4.5 9.938-10 9.938Z"/>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h160v160H0z"/>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="trash"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 6.5V19a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V6.5M9 17h6m-6-4h6M8.5 6.5v-2A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5v2m4.5 0H4"/>
    </symbol>
    <symbol id="camera"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#a)">
        <path d="m14.586 4.586 1.121 1.121a1 1 0 0 0 .707.293H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.586a1 1 0 0 0 .707-.293l1.121-1.121A2 2 0 0 1 10.828 4h2.344a2 2 0 0 1 1.414.586Z"/>
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18.05 9a.05.05 0 0 1-.03.046.05.05 0 1 1 .03-.046"/>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z"/>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="arrow-down"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 10-4 4-4-4"/>
    </symbol>
    <symbol id="close"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clip-path="url(#a)">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 6.356-12 12m12 0-12-12"/>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z"/>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="image" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_326_8189)">
        <path d="M21 16.014L16.707 11.721C16.316 11.33 15.683 11.33 15.293 11.721L11 16.014" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 21.0142H6C4.343 21.0142 3 19.6712 3 18.0142V6.01416C3 4.35716 4.343 3.01416 6 3.01416H18C19.657 3.01416 21 4.35716 21 6.01416V18.0142C21 19.6712 19.657 21.0142 18 21.0142Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 21.014L9.70704 14.721C9.31604 14.33 8.68305 14.33 8.29305 14.721L3.44604 19.568" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.26516 8.749C9.41161 8.89544 9.41161 9.13288 9.26516 9.27933C9.11872 9.42577 8.88128 9.42577 8.73484 9.27933C8.58839 9.13288 8.58839 8.89544 8.73484 8.749C8.88128 8.60255 9.11872 8.60255 9.26516 8.749Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_326_8189">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="checkmark" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_348_9982)">
        <path d="M20 6.5L9 17.5L4 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_348_9982">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </symbol>

    <symbol id="location"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#a)">
        <path d="M12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
        <path d="M12 21s-7-5.75-7-11a7 7 0 1 1 14 0c0 5.25-7 11-7 11Z"/>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z"/>
        </clipPath>
      </defs>
    </symbol>

    <symbol id="alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3Z" stroke="#2C50EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 12.5V7.5" stroke="#2C50EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.999 16C11.861 16 11.749 16.112 11.75 16.25C11.75 16.388 11.862 16.5 12 16.5C12.138 16.5 12.25 16.388 12.25 16.25C12.25 16.112 12.138 16 11.999 16" stroke="#2C50EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="calendar"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 2v4M8 2v4M3 9h18m-2-5H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
      <path fill="#252525" d="M6.996 12a1 1 0 1 0 .009 2 1 1 0 0 0-.009-2ZM11.996 16a1 1 0 1 0 .009 2 1 1 0 0 0-.009-2ZM11.996 12a1 1 0 1 0 .009 2 1 1 0 0 0-.009-2ZM16.996 16a1 1 0 1 0 .009 2 1 1 0 0 0-.009-2ZM16.996 12a1 1 0 1 0 .009 2 1 1 0 0 0-.009-2ZM6.996 16a1 1 0 1 0 .009 2 1 1 0 0 0-.009-2Z"/>
    </symbol>

    <symbol id="search"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.54 3.551a5.296 5.296 0 1 1-7.49 7.489 5.296 5.296 0 0 1 7.49-7.489M15.25 14.75 11.5 11"/>
    </symbol>

    <symbol id="arrow-back"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 18h21m-21 0 7.5 7.502M7.5 18 15 10.5"/>
    </symbol>

    <symbol id="arrow-right" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16L14 12L10 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="download" viewBox="0 0 48 48" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6V34M24 34L18 28M24 34L30 28M16 20H10C7.79 20 6 21.79 6 24V38C6 40.21 7.79 42 10 42H38C40.21 42 42 40.21 42 38V24C42 21.79 40.21 20 38 20H32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="check" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path d="M14.6666 1.41675L5.49992 10.5834L1.33325 6.41675" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="warning" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2435_34450)">
        <path d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" stroke="#DE0A26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 12.5V7.5" stroke="#DE0A26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.999 16C11.861 16 11.749 16.112 11.75 16.25C11.75 16.388 11.862 16.5 12 16.5C12.138 16.5 12.25 16.388 12.25 16.25C12.25 16.112 12.138 16 11.999 16Z" stroke="#DE0A26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_2435_34450">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="plus_in_circle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.995 16.3545V8.35787M15.9933 12.3562H7.99667M20.999 12.36C20.999 17.3305 16.9696 21.36 11.999 21.36C7.02846 21.36 2.99902 17.3305 2.99902 12.36C2.99902 7.38942 7.02846 3.35999 11.999 3.35999C16.9696 3.35999 20.999 7.38942 20.999 12.36Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="verbal-type-video" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 17.75H5.25C4.007 17.75 3 16.743 3 15.5V8.5C3 7.257 4.007 6.25 5.25 6.25H13.125C14.368 6.25 15.375 7.257 15.375 8.5V15.5C15.375 16.743 14.368 17.75 13.125 17.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.375 13.0967L19.17 16.1507C19.906 16.7437 21 16.2197 21 15.2747V8.72473C21 7.77973 19.906 7.25573 19.17 7.84873L15.375 10.9027" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="verbal-type-voice" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16V16C9.791 16 8 14.209 8 12V6C8 3.791 9.791 2 12 2V2C14.209 2 16 3.791 16 6V12C16 14.209 14.209 16 12 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 11V11.9C19 15.821 15.866 19 12 19V19C8.134 19 5 15.821 5 11.9V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.5 6H12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 9H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.5 12.0312H12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 19V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 22H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="verbal-type-audio" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 17.7822V7.96525C8.5 7.55025 8.756 7.17825 9.144 7.03125L17.644 3.79325C18.299 3.54325 19 4.02725 19 4.72725V15.7762" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.2678 14.0057C19.2441 14.982 19.2441 16.5649 18.2678 17.5412C17.2915 18.5175 15.7085 18.5175 14.7322 17.5412C13.7559 16.5649 13.7559 14.982 14.7322 14.0057C15.7085 13.0294 17.2915 13.0294 18.2678 14.0057" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.76776 16.0057C8.74407 16.982 8.74407 18.5649 7.76776 19.5412C6.79145 20.5175 5.20854 20.5175 4.23223 19.5412C3.25592 18.5649 3.25592 16.982 4.23223 16.0057C5.20854 15.0294 6.79145 15.0294 7.76776 16.0057" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="verbal-type-photo" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9969 21H4.00293C2.89793 21 2.00293 20.105 2.00293 19V5C2.00293 3.895 2.89793 3 4.00293 3H19.9969C21.1019 3 21.9969 3.895 21.9969 5V19C21.9969 20.105 21.1009 21 19.9969 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.41422 7.58579C10.1953 8.36684 10.1953 9.63317 9.41422 10.4142C8.63317 11.1953 7.36684 11.1953 6.58579 10.4142C5.80474 9.63317 5.80474 8.36684 6.58579 7.58579C7.36684 6.80474 8.63317 6.80474 9.41422 7.58579" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 16.0004L17.781 12.6254C17.35 12.2804 16.72 12.3504 16.375 12.7814L13.039 16.9514C12.694 17.3824 12.065 17.4524 11.633 17.1074L9.765 15.6124C9.34 15.2724 8.721 15.3344 8.372 15.7534L4 21.0004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

  </svg>

</template>

<script>
export default {
  name: "SvgSprite",
}
</script>

<style>
.svg-sprite {
  display: none;
  width: 0;
  height: 0;
}
</style>
