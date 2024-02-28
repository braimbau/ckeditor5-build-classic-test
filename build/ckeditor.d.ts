/**
* @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
* For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
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
    static builtinPlugins: (typeof TextTransformation | typeof Essentials | typeof Bold | typeof Italic | typeof Underline | typeof SimpleUploadAdapter | typeof Image | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Link | typeof LinkImage | typeof Paragraph | typeof Heading | typeof Table | typeof TableToolbar | typeof List | typeof Highlight | typeof Alignment | typeof Font)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        typing: {
            transformations: {
                include: {
                    from: string;
                    to: string;
                }[];
            };
        };
        language: string;
    };
}
