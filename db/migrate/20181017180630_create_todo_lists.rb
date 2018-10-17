class CreateTodoLists < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_lists do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end

    add_index :todo_lists, :name, unique: true
    add_index :todo_lists, :user_id
  end
end
