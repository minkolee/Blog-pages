new Vue({
    el: '#notebook',
    data: function () {
        return {
            content: localStorage.getItem('content') || 'This is note',
            notes: [],
            selectedId: null
        }
    },
    computed: {
        notePreview() {
            return this.selectedNote? marked(this.selectedNote.content):'';
        },
        selectedNote() {
            return this.notes.find(note => note.id === this.selectedId)
        }
    },
    watch: {
        content: {
            //handler如果要调用其他方法，要用字符串形式
            handler: 'saveNote',
            //设置了immediate之后，这个方法会在改变前调用
        }
    },
    methods: {
        saveNote(val) {
            console.log('saving note', val);
            localStorage.setItem('content', val)
        },
        //每次调用该方法，向数组内加入一个默认note对象
        addNote() {
            //当前时间
            const time = Date.now();
            //默认note对象
            const note = {
                id: String(time),
                title: 'New note ' + (this.notes.length + 1),
                content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
                created: time,
                favorite: false,
            }
            this.notes.push(note)
        },
        selectNote(note) {
            this.selectId = note.id
        },

    },
})


