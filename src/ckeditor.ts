/**
* @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
* For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/


// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';


import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { List } from '@ckeditor/ckeditor5-list';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { Image, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Font } from '@ckeditor/ckeditor5-font';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';


export default class ClassicEditor extends ClassicEditorBase {
 public static override builtinPlugins = [
   Essentials,
   Bold,
   Italic,
   Link,
   Underline,
   Paragraph,
   SimpleUploadAdapter,
   Heading,
   Table,
   TableToolbar,
   List,
   Highlight,
   Image,
   ImageToolbar,
   ImageResize,
   ImageUpload,
   ImageStyle,
   Alignment,
   Font,
   LinkImage,
   TextTransformation
 ];


 public static override defaultConfig = {
   toolbar: {
     items: [
       'undo', 'redo',
       '|', 'heading',
       '|', 'bold', 'italic',
       '|', 'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed',
       '|', 'bulletedList', 'numberedList', 'outdent', 'indent'
     ]
   },
   image: {
     toolbar: [
       'imageStyle:inline',
       'imageStyle:block',
       'imageStyle:side',
       '|',
       'toggleImageCaption',
       'imageTextAlternative'
     ]
   },
   table: {
     contentToolbar: [
       'tableColumn',
       'tableRow',
       'mergeTableCells'
     ]
   },
   typing: {
     transformations: {
       include: [
         { from: ' !', to: '\u00a0!' },
         { from: ' ?', to: '\u00a0?' },
         { from: ' :', to: '\u00a0:' }
       ]
     }
   },
   // This value must be kept in sync with the language defined in webpack.config.js.
   language: 'en'
 };
}