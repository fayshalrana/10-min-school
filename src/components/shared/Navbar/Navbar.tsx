import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../../assets/images/10mslogo.svg";
interface NavigationItem {
  id: string;
  label: string;
  hasDropdown: boolean;
  dropdownItems: Array<{
    icon: string;
    text: string;
  }>;
}

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Popular searches data
  const popularSearches = [
    "HSC 25 শেষ মুহূর্তের প্রস্তুতি",
    "hsc 26",
    "english",
    "ielts",
    "৯ম শ্রেণি - অনলাইন ব্যাচ ২০২৫"
  ];

  // Navigation items with dropdown data
  const navItems: NavigationItem[] = [
    {
      id: 'class',
      label: 'Class 6-12',
      hasDropdown: true,
      dropdownItems: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 27 27" class="h-7 w-7"><mask id="mask0_19054_48978" width="27" height="27" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="#fff" d="M0.529 0.443H26.674V26.588H0.529z"></path></mask><g mask="url(#mask0_19054_48978)"><path fill="#FF9D99" fillRule="evenodd" d="M13.39 5.854a1.608 1.608 0 100-3.216 1.608 1.608 0 000 3.216zm0 1.378a2.986 2.986 0 100-5.972 2.986 2.986 0 000 5.972z" clipRule="evenodd"></path><path fill="#FF9D99" d="M23.242 15.877c.993 0 1.797.805 1.797 1.797v4.001c0 .897-.595 1.62-1.332 1.62a2.261 2.261 0 01-2.261-2.261v-3.36c0-.992.804-1.797 1.796-1.797zM3.957 15.878c-.992 0-1.796.804-1.796 1.797v4c0 .897.594 1.62 1.332 1.62a2.261 2.261 0 002.26-2.26v-3.36c0-.993-.803-1.797-1.796-1.797z"></path><path fill="#FFC6C6" d="M22.603 9.738v13.696a2.269 2.269 0 01-2.269 2.269H6.864a2.269 2.269 0 01-2.27-2.269V9.738a5.66 5.66 0 015.66-5.66h6.69a5.66 5.66 0 015.659 5.66z"></path><path fill="#A51E35" d="M10.404 19.109v-8.392h1.775v3.462h3.601v-3.462h1.77v8.392h-1.77v-3.467H12.18v3.467h-1.775z"></path></g></svg>', text: 'HSC' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" class="h-7 w-7"><path fill="#F3D382" fillRule="evenodd" d="M21.508 8.933a2.952 2.952 0 100-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z" clipRule="evenodd"></path><path fill="#F3D382" d="M38.702 27.336A3.298 3.298 0 0142 30.634v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.298zM3.298 27.336A3.298 3.298 0 000 30.634v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.298z"></path><path fill="#FFE6A5" d="M37.64 15.468v25.144c0 2.3-1.864 4.165-4.164 4.165H8.746a4.165 4.165 0 01-4.165-4.165V15.468c0-5.738 4.652-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"></path><path fill="#E18E1B" d="M17.625 17.506V33.05h-3.287V20.625h-.09l-3.56 2.232v-2.915l3.848-2.436h3.089zM26.56 33.392c-1.306-.005-2.43-.327-3.37-.964-.937-.638-1.658-1.561-2.164-2.77-.5-1.21-.749-2.665-.744-4.365 0-1.695.25-3.14.752-4.334.506-1.194 1.227-2.102 2.163-2.725.941-.627 2.062-.94 3.362-.94 1.3 0 2.419.313 3.355.94.941.628 1.665 1.539 2.17 2.733.507 1.189.757 2.631.752 4.326 0 1.705-.253 3.163-.759 4.372-.5 1.21-1.22 2.133-2.155 2.77-.937.638-2.057.957-3.363.957zm0-2.725c.89 0 1.6-.448 2.132-1.344.531-.895.794-2.239.79-4.03 0-1.179-.122-2.16-.365-2.945-.238-.784-.577-1.374-1.017-1.768a2.218 2.218 0 00-1.54-.592c-.886 0-1.595.442-2.126 1.328-.531.886-.8 2.211-.805 3.977 0 1.194.12 2.191.357 2.99.243.795.585 1.392 1.025 1.792.44.395.956.592 1.548.592z"></path></svg>', text: 'Class Ten' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" class="h-7 w-7"><mask id="mask0_10618_73943" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="#fff" d="M0 0H48V48H0z"></path></mask><g mask="url(#mask0_10618_73943)"><path fill="#67D6C5" fillRule="evenodd" d="M24.51 9.933a2.952 2.952 0 100-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z" clipRule="evenodd"></path><path fill="#67D6C5" d="M41.7 27.745A3.298 3.298 0 0145 31.043v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.298zM6.298 27.745A3.298 3.298 0 003 31.043v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.298z"></path><path fill="#89EAD3" d="M40.53 16.469v25.143c0 2.3-1.865 4.165-4.165 4.165h-24.73a4.165 4.165 0 01-4.165-4.165V16.47c0-5.738 4.651-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"></path><path fill="#1D7A87" d="M24.073 18.293c.8 0 1.569.134 2.308.402a5.314 5.314 0 011.988 1.283c.587.587 1.05 1.366 1.39 2.338.343.966.518 2.153.523 3.56 0 1.32-.15 2.5-.448 3.537-.293 1.032-.716 1.91-1.267 2.633a5.54 5.54 0 01-1.997 1.655c-.779.374-1.65.562-2.61.562-1.038 0-1.954-.2-2.748-.6a5.16 5.16 0 01-1.92-1.647 5.128 5.128 0 01-.873-2.353h3.24c.127.567.393 1.007.797 1.32.405.31.906.464 1.503.464 1.012 0 1.781-.44 2.308-1.32.526-.886.792-2.098.797-3.637h-.107a3.723 3.723 0 01-.94 1.177 4.385 4.385 0 01-1.36.751 4.859 4.859 0 01-1.616.266c-.916 0-1.733-.215-2.452-.645a4.629 4.629 0 01-1.7-1.776c-.415-.754-.622-1.615-.622-2.581-.005-1.042.235-1.97.72-2.785a5.08 5.08 0 012.035-1.913c.875-.466 1.892-.696 3.051-.69zm.023 2.58c-.511 0-.967.122-1.366.365a2.69 2.69 0 00-.942.98c-.227.409-.338.867-.334 1.373 0 .511.112.971.334 1.381.228.405.537.729.927.972.394.238.845.357 1.35.357a2.603 2.603 0 001.898-.797 2.8 2.8 0 00.57-.873 2.797 2.797 0 00-.144-2.399 2.668 2.668 0 00-.942-.986 2.51 2.51 0 00-1.351-.372z"></path></g></svg>', text: 'Class Nine' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" class="h-7 w-7"><mask id="mask0_10618_73965" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="#fff" d="M0 0H48V48H0z"></path></mask><g mask="url(#mask0_10618_73965)"><path fill="#FBB986" fillRule="evenodd" d="M24.51 9.933a2.952 2.952 0 10-.001-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z" clipRule="evenodd"></path><path fill="#FBB986" d="M41.7 28.336A3.298 3.298 0 0145 31.635v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.299zM6.298 28.336A3.298 3.298 0 003 31.635v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.299z"></path><path fill="#FDD6AF" d="M40.64 16.469v25.143c0 2.3-1.864 4.165-4.164 4.165h-24.73a4.165 4.165 0 01-4.165-4.165V16.47c0-5.738 4.652-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"></path><path fill="#D04F28" d="M24.293 34.263c-1.169 0-2.209-.19-3.12-.57-.905-.384-1.616-.908-2.132-1.57a3.573 3.573 0 01-.774-2.255c0-.648.146-1.242.44-1.784.298-.546.703-1 1.214-1.358a4.003 4.003 0 011.716-.699v-.106c-.83-.167-1.503-.57-2.02-1.207a3.472 3.472 0 01-.774-2.239c0-.804.236-1.52.706-2.148.47-.632 1.116-1.128 1.936-1.488.825-.364 1.76-.546 2.808-.546 1.048 0 1.981.182 2.8.547.826.364 1.473.862 1.944 1.495.47.627.708 1.34.713 2.14-.005.855-.268 1.602-.789 2.24a3.393 3.393 0 01-2.004 1.206v.106a3.938 3.938 0 011.693.699c.51.359.916.812 1.214 1.358.304.542.458 1.136.463 1.784a3.61 3.61 0 01-.782 2.254c-.516.663-1.23 1.187-2.14 1.571-.906.38-1.943.57-3.112.57zm0-2.414c.521 0 .977-.094 1.366-.281.39-.192.694-.455.911-.79.223-.338.334-.728.334-1.168 0-.45-.114-.848-.341-1.192a2.348 2.348 0 00-.926-.82c-.39-.202-.838-.303-1.344-.303-.5 0-.949.101-1.343.303-.395.198-.706.471-.934.82a2.145 2.145 0 00-.334 1.192c0 .44.109.83.327 1.169.217.334.523.597.918.789.395.187.85.28 1.366.28zm0-6.945a2.47 2.47 0 001.161-.266 2 2 0 00.797-.736c.193-.314.289-.675.289-1.085a1.944 1.944 0 00-1.078-1.784c-.334-.177-.724-.266-1.169-.266-.44 0-.83.089-1.169.266-.339.172-.604.412-.797.721-.187.304-.28.658-.28 1.063 0 .41.096.771.288 1.085a2 2 0 00.797.736 2.47 2.47 0 001.161.266z"></path></g></svg>', text: 'Class Eight' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" class="h-7 w-7"><mask id="mask0_10618_73989" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="#fff" d="M0 0H48V48H0z"></path></mask><g mask="url(#mask0_10618_73989)"><path fill="#F3D382" fillRule="evenodd" d="M24.51 9.933a2.952 2.952 0 10-.001-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z" clipRule="evenodd"></path><path fill="#F3D382" d="M41.7 27.745A3.298 3.298 0 0145 31.043v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.298zM6.298 27.745A3.298 3.298 0 003 31.043v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.298z"></path><path fill="#FFE6A5" d="M40.53 16.469v25.143c0 2.3-1.865 4.165-4.165 4.165h-24.73a4.165 4.165 0 01-4.165-4.165V16.47c0-5.738 4.651-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"></path><path fill="#E3972C" d="M19.33 33.837l6.443-12.75v-.107h-7.506v-2.687h10.907v2.725l-6.452 12.82h-3.393z"></path></g></svg>', text: 'Class Seven' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" class="h-7 w-7"><mask id="mask0_10618_74012" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="#fff" d="M0 0H48V48H0z"></path></mask><g mask="url(#mask0_10618_74012)"><path fill="#82AEFB" fillRule="evenodd" d="M24.51 9.933a2.952 2.952 0 10-.001-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z" clipRule="evenodd"></path><path fill="#82AEFB" d="M41.7 28.336A3.298 3.298 0 0145 31.635v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.299zM6.298 28.336A3.298 3.298 0 003 31.635v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.299z"></path><path fill="#ACCCFD" d="M40.64 16.469v25.143c0 2.3-1.864 4.165-4.164 4.165h-24.73a4.165 4.165 0 01-4.165-4.165V16.47c0-5.738 4.652-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"></path><path fill="#2352D1" d="M24.475 34.263a7.022 7.022 0 01-2.315-.403 5.27 5.27 0 01-1.988-1.282c-.587-.593-1.053-1.377-1.397-2.353-.339-.977-.508-2.176-.508-3.598.005-1.306.154-2.472.447-3.5.299-1.031.724-1.907 1.276-2.625a5.582 5.582 0 011.996-1.64c.774-.38 1.642-.569 2.603-.569 1.038 0 1.953.202 2.748.607a5.06 5.06 0 011.913 1.632c.485.688.779 1.46.88 2.315h-3.241c-.127-.541-.392-.966-.797-1.275-.405-.309-.906-.463-1.503-.463-1.012 0-1.781.44-2.307 1.32-.521.881-.787 2.078-.797 3.59h.106c.233-.46.546-.852.941-1.176.4-.329.853-.58 1.359-.751a4.902 4.902 0 011.617-.266c.92 0 1.74.218 2.459.653a4.628 4.628 0 011.7 1.776c.415.754.622 1.617.622 2.588 0 1.053-.245 1.989-.736 2.808a5.104 5.104 0 01-2.042 1.928c-.87.46-1.882.689-3.036.684zm-.015-2.581a2.565 2.565 0 002.3-1.351c.228-.415.341-.88.341-1.397 0-.516-.113-.979-.341-1.389a2.525 2.525 0 00-2.277-1.344c-.38 0-.731.072-1.055.213-.319.142-.6.34-.843.592a2.844 2.844 0 00-.766 1.936c0 .5.114.959.341 1.374.233.415.547.746.942.994.4.248.852.372 1.358.372z"></path></g></svg>', text: 'Class Six' }
      ]
    },
    {
      id: 'skills',
      label: 'SkillS',
      hasDropdown: true,
      dropdownItems: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="w-[20px] h-[20px] mr-4"><path fill="#0FD8DE" d="M12.012 7.98a.34.34 0 01.357 0l9.954 6.116a.34.34 0 010 .58l-9.954 6.116a.341.341 0 01-.357 0l-9.955-6.115a.34.34 0 010-.581l9.955-6.115z"></path><path fill="#2696FF" d="M12.012 3.208a.34.34 0 01.356 0l9.955 6.115a.34.34 0 010 .581l-9.955 6.115a.34.34 0 01-.356 0L2.057 9.904a.34.34 0 010-.58l9.955-6.116z"></path><path fill="#0C7EE9" d="M18.912 12l-6.722 4.129L5.47 12l6.721-4.129L18.912 12z"></path></svg>', text: 'All courses' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/images/icons8-speech-bubble_1710918691528.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/images/icons8-speech-bubble_1710918691528.png" style="color: transparent;">', text: 'Language Learning' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1116605411_1710918747102.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/images/Group_1116605411_1710918747102.png" style="color: transparent;">', text: 'Freelancing' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/images/bundle_1708241463619.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/images/bundle_1708241463619.png" style="color: transparent;">', text: 'Bundle' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1125212631_1710918785394.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/images/Group_1125212631_1710918785394.png" style="color: transparent;">', text: 'Skills & IT' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1116604786_1710918818930.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/images/Group_1116604786_1710918818930.png" style="color: transparent;">', text: 'Design & Creative' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/fonts/Job-ready-page-icon.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/fonts/Job-ready-page-icon.png" style="color: transparent;">', text: 'Career Readiness' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1710918880992.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/images/Group_1710918880992.png" style="color: transparent;">', text: 'Kids (Age 7-14)' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/images/developer_1_%281%29_1710918943745.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/images/developer_1_%281%29_1710918943745.png" style="color: transparent;">', text: 'Professional' },
        { icon: '<img name="skills" alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1116604282_1710918903488.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mr-4" src="https://cdn.10minuteschool.com/images/Group_1116604282_1710918903488.png" style="color: transparent;">', text: 'Free' },
      ]
    },
    {
      id: 'admission',
      label: 'Admission',
      hasDropdown: false,
      dropdownItems: []
    },
    {
      id: 'online',
      label: 'অনলাইন ব্যাচ',
      hasDropdown: true,
      dropdownItems: [
        { icon: '', text: 'Online Batch (Class 6-10)' },
        { icon: '', text: 'HSC' },
      ]
    },
    {
      id: 'english',
      label: 'English Center',
      hasDropdown: true,
      dropdownItems: [
        { icon: '<img src="https://cdn.10minuteschool.com/images/all_progm_icon_1715756772156.png" class="w-7">', text: 'All Programmes' },
        { icon: '<img src="https://cdn.10minuteschool.com/images/Ielts_icon_1715679736395.png" class="w-7">', text: 'IELTS Programme' },
        { icon: '<img src="https://cdn.10minuteschool.com/images/sej_1715679758933.png" class="h-7 w-7">', text: 'Spoken English (Junior)' },
        { icon: '<img src="https://cdn.10minuteschool.com/images/Group_1719308187518.png" class="object-contain h-7 w-7">', text: 'English Foundation Programme' },
        { icon: '<img src="https://cdn.10minuteschool.com/images/minute_school_1747228630418.svg" class="object-contain h-7 w-7">', text: 'Kids\' English' },
      ]
    },
    {
      id: 'more',
      label: 'More',
      hasDropdown: true,
      dropdownItems: [
        { icon: '', text: 'Job Preparation Courses' },
        { icon: '', text: 'Blog' },
        { icon: '', text: 'Book Store' },
        { icon: '', text: 'Free Notes & Guides' },
        { icon: '', text: 'Academic Digital Content' },
        { icon: '', text: 'Verify Certificate' },
        { icon: '', text: 'Career / Recruitment' },
        { icon: '', text: 'Join as a Teacher' },
        { icon: '', text: 'Join as an Affiliate' },
      ]
    }
  ];

  const handleMouseEnter = (itemId: string): void => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = (): void => {
    setActiveDropdown(null);
  };

  const handleSearchFocus = (): void => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = (): void => {
    // Delay hiding to allow clicking on dropdown items
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 200);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleSearchItemClick = (searchTerm: string): void => {
    setSearchValue(searchTerm);
    setIsSearchFocused(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white md:h-[65px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
        <div className="flex items-center justify-around  gap-3 w-full">
          {/* Logo */}
          <div className="flex items-center h-[27px] w-[100px]">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <img src={logo} alt="10 Minute School Logo" className="h-[27px] w-auto" />
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 hidden w-full pr-4 md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none" viewBox="0 0 27 24"><path fill="#fff" d="M0 0H26.514V23.99H0z"></path><path fill="#111827" d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"></path><path fill="#F1844C" d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"></path></svg>
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                className="shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 md:border pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
              />
              
              {/* Search Dropdown */}
              {isSearchFocused && (
                <div className="absolute z-50 top-full mt-1 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 border border-gray-200">
                  <div className="py-3">
                    {/* Popular Searches Header */}
                    <div className="px-4 pb-2">
                      <h3 className="text-sm font-semibold text-gray-900">জনপ্রিয় অনুসন্ধান</h3>
                    </div>
                    
                    {/* Popular Search Items */}
                    <div className="border-t border-gray-100">
                      {popularSearches.map((searchTerm, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchItemClick(searchTerm)}
                          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <svg className="h-4 w-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <span>{searchTerm}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={` flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green ${
                    activeDropdown === item.id
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.id && item.hasDropdown && (
                  <>
                    {/* Invisible bridge to prevent dropdown from closing when moving from button to dropdown */}
                    <div 
                      className="absolute top-full -left-10 right-0 h-[5px] bg-transparent"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    />
                    <div 
                      className="absolute z-50 top-full -left-10 mt-[5px] w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5  min-w-[177px] max-w-max"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-1">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <a
                            key={index}
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <span className="mr-3 text-lg">
                              {dropdownItem.icon.startsWith('<svg') ? (
                                <span 
                                  className="w-6 h-6"
                                  dangerouslySetInnerHTML={{ __html: dropdownItem.icon }}
                                />
                              ) : dropdownItem.icon.startsWith('<img') ? (
                                <span 
                                  className="w-6 h-6"
                                  dangerouslySetInnerHTML={{ __html: dropdownItem.icon }}
                                />
                              ) : (
                                dropdownItem.icon
                              )}
                            </span>
                            <span>{dropdownItem.text}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Elements */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button className="flex items-center space-x-2 px-2 py-1 border border-gray-300 rounded-md text-sm">
              <svg className="hidden md:block" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_9494_69309)"><path d="M8.4129 12.71C8.34261 12.8852 8.17283 13 7.98407 13C7.65462 13 7.43101 12.6651 7.5573 12.3608L10.0079 6.45676C10.1226 6.18024 10.3926 6 10.692 6C10.9914 6 11.2613 6.18024 11.3761 6.45676L13.8267 12.3608C13.953 12.6651 13.7294 13 13.3999 13C13.2112 13 13.0414 12.8852 12.9711 12.71L10.7344 7.13611C10.7275 7.11878 10.7107 7.10742 10.692 7.10742C10.6733 7.10742 10.6565 7.11878 10.6496 7.13611L8.4129 12.71ZM8.66745 10.6416C8.66745 10.434 8.83578 10.2656 9.04342 10.2656H12.3406C12.5482 10.2656 12.7165 10.434 12.7165 10.6416C12.7165 10.8492 12.5482 11.0176 12.3406 11.0176H9.04342C8.83578 11.0176 8.66745 10.8492 8.66745 10.6416Z" fill="#6B7280"></path><path d="M8.75662 1C8.94575 1 9.09907 1.15332 9.09907 1.34244C9.09907 1.53157 8.94575 1.68489 8.75662 1.68489H8.0862V6.54228C8.0862 6.79507 7.88128 7 7.62848 7C7.45399 7 7.29663 6.8996 7.2092 6.74859C7.0493 6.47242 6.86254 6.22503 6.64891 6.00643C6.37238 5.71704 6.07656 5.46945 5.76145 5.26367L6.0026 4.62701C6.24698 4.76849 6.50099 4.96141 6.76466 5.20579C7.02833 5.45016 7.2309 5.69775 7.37238 5.94855C7.36595 5.85209 7.35952 5.76206 7.35309 5.67846C7.35309 5.59485 7.34987 5.50804 7.34344 5.41801C7.34344 5.32797 7.34344 5.23151 7.34344 5.12862V1.68489H0.634436C0.445309 1.68489 0.291992 1.53157 0.291992 1.34244C0.291992 1.15332 0.44531 1 0.634436 1H8.75662ZM4.01546 6.12219C3.57817 6.12219 3.16016 6.01929 2.76145 5.8135C2.36273 5.60772 1.98653 5.26045 1.63283 4.7717C1.33459 4.34644 1.05532 3.78598 0.795026 3.09035C0.722542 2.89664 0.82885 2.68352 1.02533 2.61892C1.21787 2.55562 1.42501 2.65882 1.49615 2.8486C1.68952 3.36445 1.88942 3.7997 2.09585 4.15434C2.35309 4.57878 2.63926 4.89068 2.95437 5.09003C3.26948 5.28939 3.62961 5.38907 4.03476 5.38907C4.38845 5.38907 4.67141 5.3344 4.88363 5.22508C5.10228 5.10932 5.25984 4.95498 5.3563 4.76206C5.45276 4.5627 5.501 4.34405 5.501 4.10611C5.501 3.73312 5.3981 3.43087 5.19231 3.19936C4.99296 2.96785 4.74215 2.85209 4.4399 2.85209C4.22768 2.85209 4.06691 2.90032 3.95759 2.99678C3.84826 3.08682 3.7936 3.22508 3.7936 3.41158C3.7936 3.45659 3.80003 3.51768 3.81289 3.59486C3.83172 3.70781 3.76689 3.82758 3.65455 3.84975L3.44714 3.89069C3.27022 3.9256 3.09239 3.82419 3.04741 3.64955C3.04177 3.62763 3.03648 3.60618 3.03154 3.58521C3.01225 3.46945 3.0026 3.36013 3.0026 3.25723C3.0026 3.01929 3.06691 2.81994 3.19553 2.65916C3.33058 2.49839 3.50099 2.37942 3.70678 2.30225C3.919 2.21865 4.14087 2.17685 4.37238 2.17685C4.7518 2.17685 5.07977 2.26367 5.3563 2.4373C5.63283 2.6045 5.84826 2.83601 6.0026 3.13183C6.15694 3.42765 6.23411 3.7717 6.23411 4.16399C6.23411 4.51125 6.15373 4.83601 5.99296 5.13826C5.83219 5.43408 5.58781 5.67203 5.25984 5.85209C4.93186 6.03215 4.51707 6.12219 4.01546 6.12219ZM3.70678 2.51447C3.67463 2.30868 3.57817 2.12862 3.41739 1.97428C3.26305 1.8135 3.03476 1.70096 2.73251 1.63666L2.96402 1.20257L3.3981 1.31833C3.76466 1.45981 4.02833 1.62058 4.1891 1.80064C4.34987 1.98071 4.44312 2.209 4.46884 2.48553L3.70678 2.51447Z" fill="#6B7280"></path></g><defs><clipPath id="clip0_9494_69309"><rect width="14" height="14" fill="white" transform="translate(0.291992)"></rect></clipPath></defs></svg>
              <span className="text-gray-700">বাং</span>
            </button>

            {/* Phone Number */}
            <a href='tel:+88016910' className="flex items-center space-x-1">
            <FaPhoneAlt className='text-green-600'/>
              <span className="text-green-600 font-medium">16910</span>
            </a>

            {/* Login Button */}
            <a href="https://10minuteschool.com/en/auth/login/?returnUrl=%2Fen%2Fproduct%2Fielts-course%2F" target='_blank' className="bg-green-600 text-white px-3 py-1 md:px-6 rounded-md leading-[18 px] whitespace-nowrap text-[12px] font-semibold leading-[24px] md:text-[16px] md:font-medium hover:bg-green-700 transition-colors">
              লগ-ইন
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 